import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './../shared/shared.module';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '664462309144-e1b6fgtcboicec22a1lo2bc8k76f1mh1.apps.googleusercontent.com'
            )
          },
        ]
      } as SocialAuthServiceConfig,
    }
  ],
})
export class AccountModule {}
