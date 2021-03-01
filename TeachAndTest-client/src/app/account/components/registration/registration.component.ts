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
import { Routes } from 'src/app/shared/utils/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent
  implements OnInit {
  email = new FormControl();
  firstname = new FormControl();
  lastname = new FormControl();
  password = new FormControl('', [
    this.checkPasswordToMatch.bind(this),
  ]);
  passwordRepeated = new FormControl('', [
    this.checkPasswordToMatch.bind(this),
  ]);

  registrationForm = new FormGroup({
    email: this.email,
    firstname: this.firstname,
    lastname: this.lastname,
    password: this.password,
    passwordRepeated: this.passwordRepeated,
  });

  info: any;
  constructor(
    private remoteService: AccountService,
    private rout: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(value: any): void {
    this.remoteService
      .registerNewUser(value)
      .subscribe(
        (data: any) => {
          this.rout.navigate([
            Routes.Account.LoginPage,
          ]);
        },
        (error: any) => {
          console.log('error');
        }
      );
  }

  passwordChanged() {
    console.log('change input');
    this.passwordRepeated.updateValueAndValidity();
    this.password.updateValueAndValidity();
    this.password.updateValueAndValidity();
    console.log(
      'this.password.valid',
      this.password.valid
    );
    console.log(
      'this.passwordRepeated.valid',
      this.passwordRepeated.valid
    );
  }

  checkPasswordToMatch(
    control: AbstractControl
  ): {
    [key: string]: boolean;
  } | null {
    console.log('check password to match');
    const obj1 = this.password;
    const obj2 = this.passwordRepeated;
    if (obj1?.value != obj2?.value) {
      console.log('dont match');
      return {
        'passwords match': false,
      };
    }

    return null;
  }
}
