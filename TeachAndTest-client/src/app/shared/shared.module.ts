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

@NgModule({
  declarations: [
    GenericInputComponent,
    CounterInputComponent,
    ReactiveInputComponent,
    PasswordInputComponent,
    CustomInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    GenericInputComponent,
    CounterInputComponent,
    ReactiveInputComponent,
    PasswordInputComponent,
  ],
})
export class SharedModule {}
