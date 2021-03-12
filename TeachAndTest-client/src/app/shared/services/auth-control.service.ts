import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthControlService {
  private _token: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get token(): string {
    return this._token.value;
  }

  login(user: any, token: string): void {
    console.log('user', user)
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(token));
    this.currentUserSubject.next(user);
    //todo add redirect to home
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  SetToken(value: string): void {
    this._token.next(value);
    localStorage.setItem('token', value);
  }
}
