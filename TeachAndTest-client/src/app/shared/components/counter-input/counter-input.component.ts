import {
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => CounterInputComponent
      ),
      multi: true,
    },
  ],
})
export class CounterInputComponent
  implements OnInit, ControlValueAccessor {
  @Input() min: number;
  @Input() max: number;

  value = 0;
  disabled = false;

  constructor() {}
  ngOnInit(): void {}

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: number): void {
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

  increase() {
    if (typeof this.max === 'undefined') {
      this.value++;
      this.onChange(this.value);
    } else if (this.value < this.max) {
      this.value++;
      this.onChange(this.value);
    }
  }

  decrease() {
    if (typeof this.min === 'undefined') {
      this.value--;
      this.onChange(this.value);
    } else if (this.value > this.min) {
      this.value--;
      this.onChange(this.value);
    }
  }
}
