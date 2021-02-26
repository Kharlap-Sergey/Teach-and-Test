import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomInputComponent implements OnInit {
  @Input() inputControl:any;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
