import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [
  CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
