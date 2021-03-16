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

  showWarning(message: string, title: string) {
    this.toastr.warning(message, title, {
      toastClass: 'toastr',
    });
  }
}
