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

  ngOnInit(): void {}

  public handleEditorFocus(event: any) {
    if(this.isEditorUnderFocus){
      event.preventDefault();
      return;
    }
    this.isEditorUnderFocus = true;

    this.fakeInput.nativeElement.focus();
    //console.log(event);
  }
  public handleEditorBlur(event: any) {
    if(event.relatedTarget == this.htmlEditor.nativeElement) {
      event.preventDefault();
      return;
    }
    this.isEditorUnderFocus = false;
    console.log(event);
  }
}
