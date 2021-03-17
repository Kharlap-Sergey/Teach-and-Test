import {
  Component,
  OnInit,
  Self,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { Routes } from '@app/shared/utils/routes';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  private _loading = false;
  public set isLoading(value: boolean) {
    if (value) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }
    this._loading = value;
  }
  public get isLoading(): boolean {
    return this._loading;
  }

  public email = new FormControl();
  public firstname = new FormControl();
  public lastname = new FormControl();
  public password = new FormControl('');
  public passwordRepeated = new FormControl('', [
    this.checkPasswordToMatch.bind(this),
  ]);
  public registrationForm = new FormGroup({
    email: this.email,
    firstname: this.firstname,
    lastname: this.lastname,
    password: this.password,
    passwordRepeated: this.passwordRepeated,
  });

  constructor(
    private spinner: NgxSpinnerService,
    private remoteService: AccountService,
    private rout: Router
  ) {}

  activated = false;
  submitButtonHandler(e: any) {
    this.activated = true;
    if (this.registrationForm.invalid) {
      e.preventDefault();
    }
  }

  ngOnInit(): void {}

  onSubmit(value: any): void {
    if (this.registrationForm.invalid) {
      this.activated = true;
      return;
    }
    this.isLoading = true;
    this.remoteService
      .registerNewUser(value)
      .subscribe(
        (data: any) => {
          this.isLoading = false;
          this.rout.navigate([
            Routes.Account.LoginPage,
          ]);
        },
        (error: any) => {
          this.isLoading = false
        }
      );
  }

  passwordChanged() {
    this.password.updateValueAndValidity();
    this.passwordRepeated.updateValueAndValidity();
  }

  checkPasswordToMatch(
    control: AbstractControl
  ): {
    [key: string]: boolean;
  } | null {
    const obj1 = this.password;
    const obj2 = this.passwordRepeated;
    if (!obj1?.value || !obj2?.value) {
      return null;
    }
    if (obj1?.value != obj2?.value) {
      return {
        'passwords match': false,
      };
    }
    return null;
  }
}
