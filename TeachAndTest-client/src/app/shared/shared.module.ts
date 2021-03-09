import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { ReactiveInputComponent } from './components/controls/reactive-input/reactive-input.component';
import { PasswordInputComponent } from './components/controls/password-input/password-input.component';
import { CustomInputComponent } from './components/controls/custom-input/custom-input.component';
import { SubmitButtonComponent } from './components/controls/submit-button/submit-button.component';
import { InputErrorsComponent } from './components/controls/input-errors/input-errors.component';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GenericInputComponent,
    CounterInputComponent,
    ReactiveInputComponent,
    PasswordInputComponent,
    CustomInputComponent,
    SubmitButtonComponent,
    InputErrorsComponent,
    LinkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    GenericInputComponent,
    CounterInputComponent,
    ReactiveInputComponent,
    PasswordInputComponent,
    SubmitButtonComponent,
    LinkComponent,
  ],
})
export class SharedModule {}
