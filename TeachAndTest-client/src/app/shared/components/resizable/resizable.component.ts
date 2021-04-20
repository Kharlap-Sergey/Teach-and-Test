import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { inputs } from '@syncfusion/ej2-angular-richtexteditor/src/rich-text-editor/richtexteditor.component';

const enum Status {
  OFF = 0,
  RESIZE = 1,
}

//https://github.com/theideasaler/angular-resizable-draggable
@Component({
  selector: 'app-resizable',
  templateUrl: './resizable.component.html',
  styleUrls: ['./resizable.component.scss'],
})
export class ResizableComponent
  implements OnChanges, OnInit, AfterViewInit {
  private _containerWidth: number = 0;
  private _containerHeight: number = 0;
  private _areaWidth: number = 0;
  private _areaHeight: number = 0;

  private boxPosition: { left: number; top: number };
  private containerPos: {
    left: number;
    top: number;
    right: number;
    bottom: number;
  };

  @ViewChild('box') public box: ElementRef;
  @ViewChild('container') public container: ElementRef;
  @ViewChild('area') public area: ElementRef;

  @Input()
  public width: number;
  @Input()
  public height: number;
  @Input()
  public isWidthLocked: boolean = false;
  @Input()
  public isHeightLocked: boolean = false;
  @Input()
  public shouldShowSize: boolean = true;

  public left: number = 0;
  public top: number = 0;

  public mouse: { x: number; y: number };
  public status: Status = Status.OFF;

  public get containerHeight(): number {
    return this._containerHeight;
  }
  public set containerHeight(height: number) {
    if (height !== this.height && this.isHeightLocked)
      return;
    if (height < this.height) return;

    this._containerHeight = height;
  }
  public get containerWidth(): number {
    return this._containerWidth;
  }
  public set containerWidth(width: number) {
    if (width !== this.width && this.isWidthLocked)
      return;
    if (width < this.width) return;
    this._containerWidth = width;
  }
  public get areaHeight(): number {
    return this._areaHeight;
  }
  public set areaHeight(height: number) {
    height = height > 10 ? height : 10;

    this.containerHeight = height;
    this._areaHeight = height;
  }
  public get areaWidth(): number {
    return this._areaWidth;
  }
  public set areaWidth(width: number) {
    width = width > 10 ? width : 10;

    this.containerWidth = width;
    this._areaWidth = width;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.areaWidth = this.width;
    this.areaHeight = this.height;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadBox();
    this.loadContainer();
  }
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouse = {
      x: event.clientX,
      y: event.clientY,
    };

    if (this.status === Status.RESIZE) this.resize();
  }

  public setStatus(event: MouseEvent, status: number) {
    if (status === 1) event.stopPropagation();
    else this.loadBox();
    this.status = status;
  }

  private resize() {
    this.areaWidth =
      this.mouse.x - this.boxPosition.left;
    this.areaHeight =
      this.mouse.y - this.boxPosition.top;
  }

  private loadBox() {
    const {
      left,
      top,
    } = this.area.nativeElement.getBoundingClientRect();
    this.boxPosition = { left, top };
  }

  private loadContainer() {
    const left = this.boxPosition.left - this.left;
    const top = this.boxPosition.top - this.top;
    const right = left + 600;
    const bottom = top + 450;
    this.containerPos = { left, top, right, bottom };
  }
}
