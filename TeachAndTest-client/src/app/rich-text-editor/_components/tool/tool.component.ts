import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss'],
})
export class ToolComponent implements OnInit {
  @Input()
  public disabled: boolean = false
  @Input()
  public capture: string = '';
  @Output()
  public click = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
