import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@Directive({
  selector: '[showLoader]',
})
export class ShowLoaderDirective {
  private _isLoading: boolean;
  @Input() public set showLoader(
    value: boolean
  ) {
    if (value) {
      this.spinner.show();
    } else {
      this.spinner.hide();
    }
    this._isLoading = value;

    console.log(`this.isLoading`, this._isLoading);
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private spinner: NgxSpinnerService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    const loaderComponent = this.componentFactoryResolver.resolveComponentFactory(LoaderComponent)
    this.viewContainer.createComponent(loaderComponent);

    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  private enableLoader(): void {}
  private disableLoader(): void {}
}
