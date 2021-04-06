import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CourseService } from '@app/course/_services/course.service';

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.scss'],
})
export class TeachComponent implements OnInit {
  public title = new FormControl('');
  public isLoading: boolean = false;
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {}

  createCourse() {
    if (!this.title?.value?.length) {
      throw 'title is required.';
    }

    this.isLoading = true;
    this.courseService
      .createCourse(this.title.value)
      .subscribe(
        (response) => {
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }
}
