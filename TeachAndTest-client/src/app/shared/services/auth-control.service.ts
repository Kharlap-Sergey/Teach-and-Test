import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@shared/models/user';
import { LocalStorageWrapper } from '@shared/utils/local-storage-wrapper';

@Injectable({
  providedIn: 'root',
})
export class AuthControlService {
  private _token: BehaviorSubject<string>;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(
      //JSON.parse(LocalStorageWrapper.getItem('currentUser'))
      null
    );
    this._token = new BehaviorSubject<string>(
      ''
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get token(): string {
    return this._token.value;
  }

  login(user: User, token: string): void {
    LocalStorageWrapper.setItem('currentUser', JSON.stringify(user));
    LocalStorageWrapper.setItem('token', JSON.stringify(token));
    this.currentUserSubject.next(user);
  }

  logout() {
    // remove user from local storage to log user out
    LocalStorageWrapper.removeItem('currentUser');
    LocalStorageWrapper.removeItem('token');
    this.currentUserSubject.next(null);
  }

  SetToken(value: string): void {
    this._token.next(value);
    LocalStorageWrapper.setItem('token', value);
  }
}
