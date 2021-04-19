import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
} from '@angular/forms';
import { DropDownListModel } from './drop-down-list.model';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss'],
})
export class DropDownListComponent
  implements AfterViewInit, ControlValueAccessor {
  private _value: DropDownListModel;

  public disabled: boolean = false;
  @Input()
  public options: DropDownListModel[];
  public get value(): DropDownListModel {
    return this._value;
  }
  @Input()
  public set value(value: DropDownListModel) {
    this._value = value;
    this.onChange(value);
  }

  constructor(
    @Self() public controlDir: NgControl,
    private cdRef: ChangeDetectorRef
  ) {
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
  ngAfterViewInit() {
    if (!this.value) {
      setTimeout(() => {
        this.value = this.options[0];
      }, 0);

      this.cdRef.detectChanges();
    }
  }
  public handleSelection(model: DropDownListModel) {
    this.value = model;
  }
}
