import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { PortalDirective } from './portal.directive';



@NgModule({
  declarations: [PortalComponent, PortalDirective],
  imports: [
    CommonModule
  ],
  exports: [PortalComponent]
})
export class PortalModule { }
