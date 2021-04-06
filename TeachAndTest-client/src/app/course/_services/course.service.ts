import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from '@app/shared/utils/api-routes';

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
    return this.http.post(url, body, options);
  }
}
