import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AuthControlService } from '../../../shared/services/auth-control.service';
import {
  FormGroup,
  FormControl,
} from '@angular/forms';
import { SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  token: string;
  email = new FormControl();
  password = new FormControl();
  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });
  constructor(
    private remoteService: AccountService,
    private authControl: AuthControlService,
    private socialService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.authControl.token.subscribe((token) => {
      this.token = token;
    });
  }

  activated = false;
  submitButtonHandler(e: any) {
    this.activated = true;
    if (this.loginForm.invalid) {
      e.preventDefault();
    }
  }

  signInWithGoogle(): void {
    this.socialService.signIn(
      GoogleLoginProvider.PROVIDER_ID
    );

    this.socialService.authState.subscribe((user) => {
      const loggedIn = user != null;
      this.remoteService
        .loginUserThrowGoogle(user.idToken)
        .subscribe((data: any) => {
          this.authControl.SetToken(data.token);
        });
    });
  }
  signOut(): void {
    this.socialService.signOut();
  }

  onClick() {
    this.remoteService
      .testAuth(this.token)
      .subscribe((data: any) => {});
    this.remoteService
      .test()
      .subscribe((data: any) => {});
  }

  onSubmit(value: any): void {
    this.remoteService
      .loginUser(value)
      .subscribe((data: any) => {
        this.authControl.SetToken(data.token);
      });
  }
}
