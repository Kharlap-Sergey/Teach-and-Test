import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPortal]'
})
export class PortalDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
