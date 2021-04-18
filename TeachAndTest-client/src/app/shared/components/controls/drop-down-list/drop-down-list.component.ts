import {
  Component,
  Input,
  OnInit,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss'],
})
export class DropDownListComponent
  implements OnInit, ControlValueAccessor {
  private _value: any;

  public disabled: boolean = false;
  @Input()
  public content: any[];
  public get value(): any {
    return this._value;
  }
  @Input()
  public set value(value: any) {
    this._value = value;
    this.onChange(value);
  }

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};
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
  ngOnInit(): void {}

  public changeValue(){
    this.value = Math.random();
  }
}
