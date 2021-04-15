import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from '@app/shared/utils/api-routes';
import { CourseModel } from '../_models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  public createCourse(title: string){
    const url: string =  ApiRoutes.Course.Create;

    const options = {};
    const body = {
      title
    }
    return this.http.post<CourseModel>(url, body, options);
  }

  public getCourseDetails(id: number){
    const url: string  = ApiRoutes.Course.GetDetails(id);

    return this.http.get<CourseModel>(url);
  }

  public uploadCourseLogo(
    logoId: string,
    courseId: number
  ){
    const url = ApiRoutes.Course.UploadLogo;

    const body = {
      logoId,
      courseId
    }
    return this.http.post<CourseModel>(url, body)
  }

  public updateCourse(
    course: CourseModel
  ){
    const url = ApiRoutes.Course.Update;

    return this.http.patch<CourseModel>(url, course);
  }
}
