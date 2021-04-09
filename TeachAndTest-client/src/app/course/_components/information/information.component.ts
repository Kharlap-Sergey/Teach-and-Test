import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { CourseModel } from '@app/course/_models/course.model';
import { CourseService } from '@app/course/_services/course.service';
import { Routes } from '@app/shared/utils/routes';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  private courseId: number;

  public course = new CourseModel();

  constructor(
    private courseService: CourseService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    console.log(`this.activateRoute.snapshot`, this.activateRoute.snapshot)
    this.courseId = this.activateRoute.parent.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.courseService
      .getCourseDetails(this.courseId)
      .subscribe((course: CourseModel) => {
        this.course = course;
      });
  }

  navigateToEdit() {
    this.router.navigate(
      [Routes.Course.EditInformation(this.courseId)],
      {queryParams: {returnUrl: this.router.url}}
    );
  }
}
