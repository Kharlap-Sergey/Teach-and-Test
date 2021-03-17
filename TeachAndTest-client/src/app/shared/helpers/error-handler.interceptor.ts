import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NotificationService } from '@app/shared/services/notification.service';
import { Router } from '@angular/router';
import { Routes } from '@app/shared/utils/routes';

@Injectable()
export class ErrorHandlerInterceptor
  implements HttpInterceptor {
  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
          }
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            this.notificationService.showError(
              err.error.Message,
              'error'
            );
            if (err.status == 401) {
              this.notificationService.actionInfo(
                'you will be redirected to the login page',
                () => {
                  this.router.navigate([
                    Routes.Account.LoginPage,
                  ]);
                }
              );
            }
          }
        }
      )
    );
  }
}
