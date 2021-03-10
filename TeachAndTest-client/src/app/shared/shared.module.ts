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
  ],
})
export class SharedModule {}
