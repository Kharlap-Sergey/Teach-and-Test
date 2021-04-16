import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RichTextEditorComponent
  implements OnInit {
  public controls = {
    history: [
      {
        imageSrc: 'rich-text-editor/back.png',
        active: false,
        click: () => {},
        capture: 'go back',
      },
      {
        imageSrc: 'rich-text-editor/forward.png',
        active: false,
        click: () => {},
        capture: 'go forward',
      },
    ],
    styles: {
      bold: {
        value: false,
        active: true,
        capture: '',
      },
      italic: {
        value: false,
        active: true,
        capture: '',
      },
      underline: {
        value: false,
        active: true,
        capture: '',
      },
    },
  };
  public value = false;

  constructor() {}

  ngOnInit(): void {}
}
