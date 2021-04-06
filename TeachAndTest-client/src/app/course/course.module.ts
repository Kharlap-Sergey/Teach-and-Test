import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { TeachComponent } from './_components/teach/teach.component';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementComponent } from './_components/management/management.component';

@NgModule({
  declarations: [TeachComponent, ManagementComponent],
  imports: [
  CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
