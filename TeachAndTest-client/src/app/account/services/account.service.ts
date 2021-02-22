import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { UserRegistrationModel } from './../models/user-registration-model';

@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {}

  registrateNewUser(userModel: UserRegistrationModel) {
    const url: string = '';
    const options = {};
    const body = userModel;
    return this.http.patch(url, body, options);
  }
}
