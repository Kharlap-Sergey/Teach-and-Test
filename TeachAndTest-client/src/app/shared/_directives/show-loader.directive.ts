import {
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Directive({
  selector: '[showLoader]',
})
export class ShowLoaderDirective {
  private _isLoading: boolean;
  @Input() public set showLoader(
    value: boolean
  ) {
    this._isLoading = value;

    console.log(`this.isLoading`, this._isLoading);
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    this.viewContainer.createEmbeddedView(this.templateRef);

    this.viewContainer.insert(this.viewContainer.createEmbeddedView(this.templateRef))
  }

  private enableLoader(): void {}
  private disableLoader(): void {}
}
