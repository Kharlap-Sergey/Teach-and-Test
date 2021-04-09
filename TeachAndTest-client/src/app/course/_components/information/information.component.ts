import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CourseModel } from '@app/course/_models/course.model';
import { CourseService } from '@app/course/_services/course.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  private courseId: number;

  public course = new CourseModel();
  
  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.courseId = this.activateRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.courseService.getCourseDetails(this.courseId)
        .subscribe(
          (course: CourseModel) => {
            this.course = course;
          }
        )
  }
}
