import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomInputComponent
  implements OnInit {
  @Output() onInput = new EventEmitter();
  @Input() inputControl: FormControl;
  @Input() label: string;
  @Input() name: string;
  @Input() pattern: string;
  @Input() required: boolean;
  @Input() type: string;
  @Input() errorMessage: string;

  constructor() {}

  ngOnInit(): void {
    if (!this.name) {
      this.name = this.label;
    }
  }
}
