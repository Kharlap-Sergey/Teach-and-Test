import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { AccountService } from '@app/account/services/account.service';
import { AuthControlService } from '@app/shared/services/auth-control.service';
import {
  GoogleLoginProvider,
  SocialAuthService,
} from 'angularx-social-login';

@Component({
  selector: 'app-google-auth-btn',
  templateUrl: './google-auth-btn.component.html',
  styleUrls: ['./google-auth-btn.component.scss'],
})
export class GoogleAuthBtnComponent implements OnInit {
  @Output() public startLogin = new EventEmitter(); 
  @Output() public endLogin = new EventEmitter();

  constructor(
    private remoteService: AccountService,
    private authControl: AuthControlService,
    private socialService: SocialAuthService
  ) {}

  ngOnInit(): void {}

  signInWithGoogle(): void {
    this.socialService.signIn(
      GoogleLoginProvider.PROVIDER_ID
    );

    this.startLogin.emit();
    this.socialService.authState.subscribe((user) => {
      this.remoteService
        .loginUserThrowGoogle(user.idToken)
        .subscribe(
          (data: any) => {
            this.endLogin.emit();
            this.authControl.login(
              data.user,
              data.token
            );
          },
          (error: any) => {
            this.endLogin.emit();
          }
        );
    });
  }
}
