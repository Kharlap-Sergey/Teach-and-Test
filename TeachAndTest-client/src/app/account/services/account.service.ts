import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable, Self } from '@angular/core';
import { AuthorizedResponse } from '@app/shared/models/authorized-response';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ApiRoutes } from 'src/app/shared/utils/api-routes';
import { UserLoginModel, UserRegistrationModel } from '../models/user-registration.model';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class AccountService {
  constructor(@Self() private http: HttpClient) {}

  registerNewUser(userModel: UserRegistrationModel) {
    const url: string = ApiRoutes.Account.RegisterNewAccount;
    const options = {};
    const body = userModel;
    return this.http.post(url, body, options);
  }
  loginUser(userModel: UserLoginModel) {
    const url: string = ApiRoutes.Authenticate.LoginUser;
    const options = {};
    const body = userModel;
    return this.http.post<AuthorizedResponse>(url, body, options);
  }

  loginUserThrowGoogle(jwt: string ){
    const url: string =  ApiRoutes.Authenticate.LoginUserThrowGoogle;

    const options = {};
    const body = {
      googleJwtToken: jwt
    }
    return this.http.post<AuthorizedResponse>(url, body, options);
  }

  getUser(userId: number){
    const url: string = ApiRoutes.Account.Get(userId);
    return this.http.get(url);
  }
  test() {
    const url: string =  "/test"
    console.log('send to test')
    return this.http.get(url);
  }

  testAuth(token: string) {
    const url: string = "/testAuth"
    const options = {
      // headers: {
      //   Authorization: "Bearer " + token,
      // },
    };

    console.log('send to test')
    return this.http.get(url, options);
  }
}
