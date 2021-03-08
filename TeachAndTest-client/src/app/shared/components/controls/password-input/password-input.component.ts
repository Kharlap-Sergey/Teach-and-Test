import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Self,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { ReactiveInputComponent } from '@shared/components/controls/reactive-input/reactive-input.component';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  constructor(public controlDir: NgControl) {
    //super(controlDir);
  }

  ngOnInit(): void {}
}
