import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-custom-form-input',
  templateUrl: './custom-form-input.component.html',
  styleUrls: ['./custom-form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomFormInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
