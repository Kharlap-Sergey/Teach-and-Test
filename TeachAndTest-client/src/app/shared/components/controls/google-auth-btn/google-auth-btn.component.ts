import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/account/services/account.service';
import { AuthControlService } from '@app/shared/services/auth-control.service';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-google-auth-btn',
  templateUrl: './google-auth-btn.component.html',
  styleUrls: ['./google-auth-btn.component.scss']
})
export class GoogleAuthBtnComponent implements OnInit {

  constructor(
    private remoteService: AccountService,
    private authControl: AuthControlService,
    private socialService: SocialAuthService
  ) {}

  ngOnInit(): void {
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
          this.authControl.login(data.user, data.token);
        });
    });
  }
}
