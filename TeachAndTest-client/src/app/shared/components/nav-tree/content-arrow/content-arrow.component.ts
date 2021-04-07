import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-arrow',
  templateUrl: './content-arrow.component.html',
  styleUrls: ['./content-arrow.component.scss']
})
export class ContentArrowComponent implements OnInit {

  @Input()
  public isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }
}
