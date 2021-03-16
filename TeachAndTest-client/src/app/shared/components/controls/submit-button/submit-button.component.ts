import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {
  @Output() click = new EventEmitter()
  @Input() loading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
