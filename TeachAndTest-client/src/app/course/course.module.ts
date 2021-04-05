import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { TeachComponent } from './teach/teach.component';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TeachComponent],
  imports: [
  CommonModule,
    FormsModule,
    SharedModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
