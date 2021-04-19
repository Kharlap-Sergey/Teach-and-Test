import {
  Component,
  ElementRef,
  Input,
  Self,
  ViewChild,
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
  implements ControlValueAccessor {
  private _value: DropDownListModel;
  private _isOpen: boolean = false;
  private _scrollTop: number = 0;
  private _shouldBeScrolled: boolean = true;

  public get scrollTop(): number {
    return this._scrollTop;
  }
  public set scrollTop(scrollValue: number) {
    if (
      this._shouldBeScrolled &&
      this.contentContainer?.nativeElement
    ) {
      this.contentContainer.nativeElement.scrollTop = scrollValue;
      this._shouldBeScrolled = false;
    }

    this._scrollTop = scrollValue;
  }

  @ViewChild('content')
  public contentContainer: ElementRef;
  @Input()
  public width: string = 'auto';
  @Input()
  public minHeight: string = 'auto';
  @Input()
  public maxHeight: string = '100px';
  @Input()
  public disabled: boolean = false;
  @Input()
  public options: DropDownListModel[];
  @Input()
  public set value(value: DropDownListModel) {
    if (this._value === value) return;
    this._value = value;

    this.onChange(value);
  }
  public get value(): DropDownListModel {
    return this._value;
  }
  @Input()
  public set isOpen(isOpen: boolean) {
    if (this._isOpen === isOpen) return;

    if (isOpen) {
      this._shouldBeScrolled = true;
      this.scrollTop = this.scrollTop;
    }

    this._isOpen = isOpen;
  }
  public get isOpen(): boolean {
    return this._isOpen;
  }

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  writeValue(value: any): void {
    if (!value) return;
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
  public handleSelection(
    event: any,
    model: DropDownListModel
  ) {
    this.value = model;
  }

  public isSelect(element: any, condition: boolean) {
    if (!condition) return false;

    this.scrollTop = element.offsetTop;

    return condition;
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};
}
