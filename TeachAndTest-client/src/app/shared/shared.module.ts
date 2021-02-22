import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomInputComponent } from './components/custom-input/custom-input.component';

@NgModule({
  declarations: [CustomInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CustomInputComponent
  ]
})
export class SharedModule { }
