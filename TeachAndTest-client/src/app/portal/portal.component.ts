import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewRef,
} from '@angular/core';
import { PortalDirective } from './portal.directive';
import { PortalInterface } from './portal.interface';
import { PortalService } from './portal.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styles: [],
})
export class PortalComponent
  implements
    PortalInterface,
    OnDestroy,
    OnInit {
  @ViewChild(PortalDirective, { static: true })
  portal: PortalDirective;

  @Input() portalName: string;

  constructor(
    private portalService: PortalService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {

  }

  ngOnInit(): void {
    this.portalName = this.portalService.subscribe(
      this,
      this.portalName
    );
  }
  ngOnDestroy(): void {
    this.portalService.unsubscribe(this.portalName);
  }

  show(component: TemplateRef<any>) {
    console.log(component);
    this.portal.viewContainerRef.clear();
    const ref = this.portal.viewContainerRef.createEmbeddedView(
      component
    );
    this.portal.viewContainerRef.insert(ref);
  }

  hide() {
    this.portal.viewContainerRef.clear();
  }
}
