import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { PortalDirective } from './portal.directive';
import { PortalInterface } from './portal.interface';
import { PortalService } from './portal.service';

@Component({
  selector: 'app-portal',
  templateUrl: "./portal.component.html",
  styles: [],
})
export class PortalComponent
  implements
    PortalInterface,
    OnDestroy,
    AfterViewInit {

  @ViewChild(PortalDirective, {static: true}) portal: PortalDirective;

  @Input() name: string = '';

  constructor(
    private portalService: PortalService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.name = this.portalService.subscribe(this);
  }
  ngAfterViewInit(): void {

  }
  ngOnDestroy(): void {
    this.portalService.unsubscribe(this.name);
  }

  show(component: any) {
    this.portal.viewContainerRef.clear()

    const componentFactoryResolver = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    this.portal.viewContainerRef.createComponent(
      componentFactoryResolver
    )
  }

  hide() {
    this.portal.viewContainerRef.clear()
  }
}
