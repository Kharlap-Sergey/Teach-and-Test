import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavTreeModel } from '@app/shared/models/nav-tree.model';
import { CourseService } from '@app/course/_services/course.service';
import { CourseModel } from '@app/course/_models/course.model';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent implements OnInit {
  public id: number;
  public course: CourseModel = new CourseModel();

  public navRows: NavTreeModel[] = [
    {
      title: 'Content',
      content: [
        {
          title: 'Information',
          content: 'information',
        },
        {
          title: 'sub2',
          content: [
            {
              title: 'About',
              content: "about"
            },
            {
              title: 'sub2',
              content: 'sub2',
            },
          ],
        },
      ],
    },
    {
      title: 'About',
      content: "about"
    },
  ];

  constructor(
    private activateRoute: ActivatedRoute,
    private courseService: CourseService
    ) {
    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.courseService.getCourseDetails(this.id)
        .subscribe(
          (course: CourseModel) => {
            this.course = course
          }
        )
  }
}
