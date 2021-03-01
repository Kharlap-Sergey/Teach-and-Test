import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GenericInputComponent } from './components/generic-input/generic-input.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { ReactiveInputComponent } from "./components/reactive-input/reactive-input.component";

@NgModule({
  declarations: [GenericInputComponent, CustomInputComponent, CounterInputComponent, ReactiveInputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [GenericInputComponent, CustomInputComponent, CounterInputComponent, ReactiveInputComponent],
})
export class SharedModule {}
