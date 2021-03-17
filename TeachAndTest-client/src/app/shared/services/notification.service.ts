import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title, {
      toastClass: 'toastr',
    });
  }

  showError(message: string, title: string) {
    this.toastr.error(message, title, {
      toastClass: 'toastr',
    });
  }

  showInfo(message: string, title: string) {
    this.toastr.info(message, title, {
      toastClass: 'toastr',
    });
  }

  actionInfo(message: string, action: any) {
    this.toastr
      .info(message, 'tap to confirm', {
        toastClass: 'toastr',
      })
      .onTap.subscribe(() => {
        action();
      });
  }
  showWarning(message: string, title: string) {
    this.toastr.warning(message, title, {
      toastClass: 'toastr',
    });
  }
}
