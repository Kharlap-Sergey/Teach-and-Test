import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
  ViewRef,
} from '@angular/core';
import { BodyTag } from './Tags/body.tag';

import { HtmlEditorControl } from './html-editor.control';
import { HtmlVertex } from './html-vertex';
import { PTag } from './Tags/p.tag';
import { BaseTag } from './Tags/base.tag';

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss'],
})
export class HtmlEditorComponent implements OnInit {
  private editorControl: HtmlEditorControl;
  private vertexList: any = {};

  @ViewChild('editor')
  public htmlEditor: ElementRef;
  public testContent = '';
  public result: string = '';
  constructor(private renderer: Renderer2) {
    const body = new BodyTag();
    const bodyVertex = new HtmlVertex(body);

    this.vertexList[
      bodyVertex.id.toString()
    ] = bodyVertex;
    this.editorControl = new HtmlEditorControl(
      bodyVertex
    );

    const p = new PTag();
    const pV = new HtmlVertex(p);

    this.vertexList[pV.id.toString()] = pV;

    bodyVertex.insertChild(pV);

    const H = new BaseTag('H');
    const Hv = new HtmlVertex(H);
    this.vertexList[Hv.id.toString()] = Hv;
    pV.insertChild(Hv);

    const e = new BaseTag('e');
    const ev = new HtmlVertex(e);
    this.vertexList[ev.id.toString()] = ev;
    Hv.insertAfter(ev);

    const p1 = new PTag();
    const p1V = new HtmlVertex(p1);

    this.vertexList[p1V.id.toString()] = p1V;

    pV.insertAfter(p1V);

    const H1 = new BaseTag('H');
    const H1v = new HtmlVertex(H1);
    this.vertexList[H1v.id.toString()] = H1v;
    p1V.insertChild(H1v);

    const e1 = new BaseTag('t');
    const e1v = new HtmlVertex(e1);
    this.vertexList[e1v.id.toString()] = e1v;
    H1v.insertAfter(e1v);

    this.testContent = this.editorControl.getContent();
    console.log(`this.testContent`, this.testContent);
  }

  ngOnInit(): void {
    // this.result = this.editorControl.getContent();
    console.log(`this.htmlEditor`, this.htmlEditor);
  }

  ngAfterViewInit() {
    this.renderer.appendChild(
      this.htmlEditor.nativeElement,
      this.testContent
    );
  }

  public handleSelection() {
    console.log(window.getSelection());
  }

  public handleInput(event: any) {
    console.log(event);
    console.log(window.getSelection());
    const tag = new BaseTag(event.data);
    const vertex = new HtmlVertex(tag);
    this.vertexList[vertex.id.toString()] = vertex;

    const selection = window.getSelection();
    const parent = selection.anchorNode.parentNode as any;

    const node = this.vertexList[parent.id] as HtmlVertex;

    console.log(node)

    let afterNode = node.leftChild

    for(let i = 0; i < selection.anchorOffset-1; i++){
      afterNode = afterNode.next;
    }

    afterNode.insertAfter(vertex);

    this.editorControl.getContent();
    console.log(afterNode);
  }
}
