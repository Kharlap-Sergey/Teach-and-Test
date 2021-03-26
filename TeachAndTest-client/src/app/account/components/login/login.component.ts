import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
} from '@angular/forms';
import { AuthControlService } from '@app/shared/services/auth-control.service';
import { AccountService } from '@app/account/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{
  private _loading = false;
  public set isLoading(value: boolean) {
    this._loading = value;
  }
  public get isLoading(): boolean {
    return this._loading;
  }

  public activated = false;
  public email = new FormControl();
  public password = new FormControl();
  public loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor(
    private remoteService: AccountService,
    private authControl: AuthControlService,
  ) {}

  submitButtonHandler(e: any) {
    this.activated = true;
    if (this.loginForm.invalid) {
      e.preventDefault();
    }
  }

  onSubmit(value: any): void {
    this.isLoading = true;
    this.remoteService.loginUser(value).subscribe(
      (data: any) => {
        this.authControl.login(data.user, data.token);
        this.isLoading = false;
      },
      (error: any) => {
        this.isLoading = false;
      },
      () => {}
    );
  }
}
