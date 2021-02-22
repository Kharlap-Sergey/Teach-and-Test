import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  //@Input()
  //controlName = new FormControl('');
  name = new FormControl('');
  //@Input() name: FormControl;

  constructor() { }
}
