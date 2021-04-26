import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss'],
})
export class HtmlEditorComponent implements OnInit {
  @ViewChild('fakeInput')
  private fakeInput: ElementRef;
  @ViewChild('htmlEditor')
  private htmlEditor: ElementRef;

  public isEditorUnderFocus: boolean = false;
  public val: string = "1234";

  ngOnInit(): void {}

  public handleEditorFocus(event: any) {
    console.log(window.getSelection());
    if (this.isEditorUnderFocus) {
      //event.relatedTarget.focus();
      return;
    }
    this.isEditorUnderFocus = true;

    this.fakeInput.nativeElement.focus();
  }
  public handleEditorBlur(event: any) {
    if (
      event.relatedTarget ==
      this.htmlEditor.nativeElement
    ) {
      return;
    }
    this.isEditorUnderFocus = false;
  }
}
