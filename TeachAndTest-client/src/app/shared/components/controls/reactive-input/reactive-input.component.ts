import { Component } from '@angular/core';
import { CustomInputComponent } from '@shared/components/controls/custom-input/custom-input.component';

@Component({
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.scss'],
})
export class ReactiveInputComponent extends CustomInputComponent {}
