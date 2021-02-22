import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GenericInputComponent } from './components/generic-input/generic-input.component';

@NgModule({
  declarations: [GenericInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [GenericInputComponent],
})
export class SharedModule {}
