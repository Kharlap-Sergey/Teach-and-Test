import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { ReactiveInputComponent } from './components/controls/reactive-input/reactive-input.component';
import { PasswordInputComponent } from './components/controls/password-input/password-input.component';
import { CustomInputComponent } from './components/controls/custom-input/custom-input.component';
import { SubmitButtonComponent } from './components/controls/submit-button/submit-button.component';
import { InputErrorsComponent } from './components/controls/input-errors/input-errors.component';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';
import { GoogleAuthBtnComponent } from './components/controls/google-auth-btn/google-auth-btn.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavLinkComponent } from './components/nav-bar/nav-link/nav-link.component';

@NgModule({
  declarations: [
    CounterInputComponent,
    ReactiveInputComponent,
    PasswordInputComponent,
    CustomInputComponent,
    SubmitButtonComponent,
    InputErrorsComponent,
    LinkComponent,
    GoogleAuthBtnComponent,
    NavBarComponent,
    NavLinkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CounterInputComponent,
    ReactiveInputComponent,
    PasswordInputComponent,
    SubmitButtonComponent,
    LinkComponent,
    GoogleAuthBtnComponent,
    NavBarComponent,
  ],
})
export class SharedModule {}
