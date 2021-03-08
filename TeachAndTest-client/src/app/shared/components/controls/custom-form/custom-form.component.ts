import {
  Component,
  OnInit,
  Self,
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
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss'],
})
export class CustomFormComponent
  implements OnInit, ControlValueAccessor, Validator {
  private _value: any;

  get value() {
    return this._value;
  }
  // @Input()
  set value(val) {
    this._value = val;
    //this.onInput.emit();
    this.onChange(this._value);
  }

  disabled = false;

  constructor(@Self() public controlDir: NgControl) {
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

  writeValue(value: any): void {
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
