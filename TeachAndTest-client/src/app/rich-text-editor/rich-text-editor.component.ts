import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RichTextEditorComponent implements OnInit {
  public value = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
