import {
  Component,
  Input,
  Self,
  OnInit,
  Output,
  EventEmitter,
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
  @Output() onInput = new EventEmitter()

  @Input() label: string;
  @Input() name: string;
  @Input() autocomplete: string;
  @Input() type: string;
  @Input() errorMessages: {
    common: string;
    [key: string]: string;
  };

  private _value: string;

  get value() {
    return this._value;
  }
  @Input()
  set value(val) {
    this._value = val;
    this.onInput.emit()
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

  getErrors() : string[]{
    const errors =[];
    for(let error in this.controlDir.control.errors){
      if(this.errorMessages?.[error]){
        errors.push(this.errorMessages[error])
      }
    }
    if(errors.length == 0){
      errors.push(this.errorMessages.common)
    }
    return errors
  }
  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator
      ? [control.validator]
      : [];
    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  inputHandler(e: any){
    this.onChange(e.target.value);
    this.onInput.emit()
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
