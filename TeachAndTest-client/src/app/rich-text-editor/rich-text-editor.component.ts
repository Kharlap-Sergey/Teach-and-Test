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
  public  model: any = {};
  public testValues = [
    { title: 'some', value: 1 },
    { title: 'some1', value: 2 },
    { title: 'some2', value: 3 },
    { title: 'some3', value: 4 },
    { title: 'some4', value: 5 },
    { title: 'some5', value: 6 }
  ];
  public controls = {
    history: [
      {
        imageSrc: 'rich-text-editor/back.png',
        disabled: false,
        click: () => {},
        capture: 'go back',
      },
      {
        imageSrc: 'rich-text-editor/forward.png',
        disabled: true,
        click: () => {},
        capture: 'go forward',
      },
    ],
    styles: [
      {
        imageSrc: 'rich-text-editor/bold.png',
        value: false,
        disabled: false,
        capture: 'Bold',
      },
      {
        imageSrc: 'rich-text-editor/italic.png',
        value: false,
        disabled: false,
        capture: 'Italic',
      },
      {
        imageSrc: 'rich-text-editor/underline.png',
        value: false,
        disabled: false,
        capture: 'Underline',
      },
    ],
  };
  public value = false;

  constructor() {
    this.model = this.testValues[3];
  }

  ngOnInit(): void {}
}
