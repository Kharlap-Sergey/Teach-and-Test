import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { TeachComponent } from './_components/teach/teach.component';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementComponent } from './_components/management/management.component';
import { InformationComponent } from './_components/information/information.component';
import { PortalModule } from '@app/portal/portal.module';

@NgModule({
  declarations: [TeachComponent, ManagementComponent, InformationComponent],
  imports: [
  CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    CourseRoutingModule,
    PortalModule
  ]
})
export class CourseModule { }
