import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NotificationService } from '@app/shared/services/notification.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  title = 'toaster-not';

  constructor(
    private notifyService: NotificationService
  ) {}

  showToasterSuccess() {
    this.notifyService.showSuccess(
      'Data shown successfully !!',
      'ItSolutionStuff.com'
    );
  }

  showToasterError() {
    this.notifyService.showError(
      'Something is wrong',
      'ItSolutionStuff.com'
    );
  }

  showToasterInfo() {
    this.notifyService.showInfo(
      'This is info',
      'ItSolutionStuff.com'
    );
  }

  showToasterWarning() {
    this.notifyService.showWarning(
      'This is warning',
      'ItSolutionStuff.com'
    );
  }
}
