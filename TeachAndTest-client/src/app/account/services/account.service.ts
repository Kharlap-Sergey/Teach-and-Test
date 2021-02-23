import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable, Self } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApiRoutes } from 'src/app/shared/utils/api-routes';
import { UserLoginModel, UserRegistrationModel } from './../models/user-registration-model';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class AccountService {
  constructor(@Self() private http: HttpClient) {}

  registrateNewUser(userModel: UserRegistrationModel) {
    const url: string = ApiRoutes.Account.RegisterNewAccount;
    const options = {};
    const body = userModel;
    return this.http.post(url, body, options);
  }
  loginUser(userModel: UserLoginModel) {
    const url: string = ApiRoutes.Authenticate.LoginUser;
    const options = {};
    const body = userModel;
    return this.http.post(url, body, options);
  }

  test() {
    const url: string = ApiRoutes.AccountController + "/test"
    console.log('send to test')
    return this.http.get(url);
  }
}
