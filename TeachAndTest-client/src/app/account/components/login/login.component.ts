import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
} from '@angular/forms';
import { AuthControlService } from '@app/shared/services/auth-control.service';
import { AccountService } from '@app/account/services/account.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private _loading = false;
  public set isLoading(value: boolean) {
    // if (value) {
    //   this.spinner.show();
    // } else {
    //   this.spinner.hide();
    // }
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
    private spinner: NgxSpinnerService,
    private remoteService: AccountService,
    private authControl: AuthControlService,
  ) {}

  ngOnInit(): void {}

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
        this.authControl.login(data, data.token);
      },
      (error: any) => {
        this.isLoading = false;
      },
      () => {}
    );
  }
}
