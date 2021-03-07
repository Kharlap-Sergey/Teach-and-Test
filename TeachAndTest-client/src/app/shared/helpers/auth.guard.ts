import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthControlService } from '@shared/services/auth-control.service';
import { Routes } from '@app/shared/utils/routes';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authControl: AuthControlService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const user = this.authControl.currentUserValue;
    if (user) {
      return true;
    }
    this.router.navigate([Routes.Account.LoginPage], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
