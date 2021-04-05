import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { TeachComponent } from './teach/teach.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [TeachComponent],
  imports: [
    CommonModule,
    SharedModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
