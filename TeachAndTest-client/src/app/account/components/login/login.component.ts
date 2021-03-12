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

  }

  activated = false;
  submitButtonHandler(e: any) {
    this.activated = true;
    if (this.loginForm.invalid) {
      e.preventDefault();
    }
  }


  //not need
  signInWithGoogle(): void {
    this.socialService.signIn(
      GoogleLoginProvider.PROVIDER_ID
    );

    this.socialService.authState.subscribe((user) => {
      const loggedIn = user != null;
      console.log('jwt1')
      this.remoteService
        .loginUserThrowGoogle(user.idToken)
        .subscribe((data: any) => {
          console.log('jwt')
          //this.authControl.login(data, data.token);
        });
    });
  }
  signOut(): void {
    this.socialService.signOut();
  }

  onClick() {
    this.remoteService
      .testAuth(this.authControl.token)
      .subscribe((data: any) => {});
    this.remoteService
      .test()
      .subscribe((data: any) => {});
  }

  onSubmit(value: any): void {
    this.remoteService
      .loginUser(value)
      .subscribe((data: any) => {
        this.authControl.login(data, data.token);
      });
  }
}
