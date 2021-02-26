import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@NgModule({
  declarations: [GenericInputComponent, CustomInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [GenericInputComponent, CustomInputComponent],
})
export class SharedModule {}
