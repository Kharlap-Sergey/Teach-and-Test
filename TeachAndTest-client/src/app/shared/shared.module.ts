import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';

@NgModule({
  declarations: [GenericInputComponent, CustomInputComponent, CounterInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [GenericInputComponent, CustomInputComponent, CounterInputComponent],
})
export class SharedModule {}
