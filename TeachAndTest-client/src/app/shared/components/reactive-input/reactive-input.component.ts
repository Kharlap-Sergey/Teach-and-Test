import {
  Component,
  forwardRef,
  Input,
  Self,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.scss'],
})
export class ReactiveInputComponent
  implements
    OnInit,
    ControlValueAccessor,
    Validator {
  @Input() label: string;
  @Input() name: string;
  @Input() errorMessage: string;

  private _value: string;

  get value() {
    return this._value;
  }
  @Input()
  set value(val) {
    this._value = val;
    this.onChange(this._value);
  }
  disabled = false;

  constructor(
    @Self() public controlDir: NgControl
  ) {
    this.controlDir.valueAccessor = this;
  }
  validate(
    control: AbstractControl
  ): ValidationErrors {
    const validators: ValidatorFn[] = [];
    return validators;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator
      ? [control.validator]
      : [];
    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
