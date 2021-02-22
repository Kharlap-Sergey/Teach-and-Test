import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomFormInputComponent } from './components/custom-form-input/custom-form-input.component';

@NgModule({
  declarations: [CustomInputComponent, CustomFormInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CustomInputComponent,
    CustomFormInputComponent
  ]
})
export class SharedModule { }
