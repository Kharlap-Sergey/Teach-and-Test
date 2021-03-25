import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { PortalService } from './portal.service';

@Directive({
  selector: '[PortalImplementer]',
})
export class PortalImplementerDirective implements OnInit{
  @Input('PortalImplementer') name: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private portalService: PortalService
  ) {
  }
  ngOnInit(): void {
    this.portalService.show(this.templateRef, this.name);
  }
}
