import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthControllService {
  public token: BehaviorSubject<string> = new BehaviorSubject<string>("")
  SetToken(value: string): void{
    this.token.next(value)
  }
  constructor() {
  }
}
