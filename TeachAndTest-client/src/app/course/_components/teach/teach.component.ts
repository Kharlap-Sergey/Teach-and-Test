import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseModel } from '@app/course/_models/course.model';
import { CourseService } from '@app/course/_services/course.service';
import { Routes } from '@app/shared/utils/routes';

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.scss'],
})
export class TeachComponent implements OnInit {
  public title = new FormControl('');
  public isLoading: boolean = false;
  constructor(
    private courseService: CourseService,
    private rout: Router
  ) {}

  ngOnInit(): void {}

  createCourse() {
    if (!this.title?.value?.length) {
      throw 'title is required.';
    }

    this.isLoading = true;
    this.courseService
      .createCourse(this.title.value)
      .subscribe(
        (response: CourseModel) => {
          this.isLoading = false;
          this.rout.navigate([
            Routes.Course.Management(response.id),
          ]);
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }
}
