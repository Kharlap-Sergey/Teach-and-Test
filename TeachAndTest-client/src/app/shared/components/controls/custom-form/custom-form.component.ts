import {
  Component,
  Input,
  OnInit,
  Self,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  Form,
  FormGroup,
  NgControl,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
})
export class CustomFormComponent
  implements OnInit{

  @Input() formGroup: FormGroup;
  form: FormGroup;
  disabled = false;

  constructor() {
  }

  ngOnInit(): void {
    this.form = this.formGroup
  }
}
