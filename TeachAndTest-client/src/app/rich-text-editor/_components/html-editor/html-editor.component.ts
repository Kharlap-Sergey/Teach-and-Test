import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss'],
})
export class HtmlEditorComponent implements OnInit {

  public result: string = '';
  constructor() {

    // let vertex = new HtmlVertex();
    // vertex.tag = {
    //   open: '<p>',
    //   style: {},
    //   close: '</p>',
    // };

    // vertex = this.editorControl.addNodeToParent(
    //   vertex
    // );

    // let subVertex = new HtmlVertex();
    // subVertex.content = 'hello world';

    // subVertex = this.editorControl.addNodeToParent(
    //   subVertex,
    //   vertex
    // );

    // let subVertex1 = new HtmlVertex();
    // subVertex1.tag = {
    //   open: "<strong>",
    //   close: "</strong>"
    // }

    // subVertex1 = this.editorControl.addNodeAfterNode(
    //   subVertex,
    //   subVertex1
    // );

    // let subVertex2 = new HtmlVertex();
    // subVertex2.content = "asdfasdfasdfasd "

    // subVertex2 = this.editorControl.addNodeToParent(
    //   subVertex2,
    //   subVertex1
    // );
  }

  ngOnInit(): void {
    // this.result = this.editorControl.getContent();
  }
}
