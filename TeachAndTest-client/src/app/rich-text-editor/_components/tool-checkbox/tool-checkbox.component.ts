import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-tool-checkbox',
  templateUrl: './tool-checkbox.component.html',
  styleUrls: ['./tool-checkbox.component.scss'],
})
export class ToolCheckboxComponent {
  private _isActive: boolean = false;

  @Input()
  public imageSrc: string = "";
  @Input()
  public disabled: boolean = false;
  @Input()
  public set isActive(value: boolean){
    if(value === this._isActive) return

    this.isActiveChange.emit(value);
    this._isActive = value;
  }
  public get isActive():boolean {
    return this._isActive;
  }
  @Output()
  public isActiveChange = new EventEmitter<boolean>();

  constructor() {}
}
