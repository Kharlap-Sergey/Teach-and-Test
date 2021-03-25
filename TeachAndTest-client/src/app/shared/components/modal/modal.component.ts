import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() show: boolean = false;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClose(event: any){
    this.close.emit(event);
  }
}
