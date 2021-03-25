import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { PortalDirective } from './portal.directive';
import { PortalImplementerDirective } from './portal-implementer.directive';



@NgModule({
  declarations: [PortalComponent, PortalDirective, PortalImplementerDirective],
  imports: [
    CommonModule
  ],
  exports: [PortalComponent, PortalImplementerDirective]
})
export class PortalModule { }
