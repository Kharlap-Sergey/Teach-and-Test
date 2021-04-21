import { IHtmlContent } from "./html-content.interface";

export class HtmlVertex {
  public _previous: HtmlVertex = null;
  public _next: HtmlVertex = null;
  public tag: IHtmlContent = null;

  public parent: HtmlVertex = null;
  //control children
  public leftChild: HtmlVertex = null;
  public rightChild: HtmlVertex = null;
  //control lien hierarchic
  public get previous() : HtmlVertex {
    return this._previous;
  }
  public set previous(previous: HtmlVertex){
    this._previous = previous;
  }
  public get next(): HtmlVertex {
    return this._next;
  }
  public set next(next: HtmlVertex) {
    this._next = next
  }

  public getCopy(): HtmlVertex{
    var node = new HtmlVertex();

    node.tag = this.tag;

    return node;
  }

  public insertChild(node: HtmlVertex): HtmlVertex {
    if(this.leftChild || this.rightChild){
      throw 'Unable to set Child when it already exists'
    }

    node.parent = this;
    this.leftChild = node;
    this.rightChild = node;

    return node;
  }

  public insertAfter(node: HtmlVertex) {
    node.previous = this;
    node.next = this.next;
    node.parent = this.parent;
    this.next = node;

    if(!node.next){
      node.parent.rightChild = node;
    }
  }

  public insertBefore(node: HtmlVertex){
    node.next = this;
    node.previous = this.previous;
    node.parent = this.parent;
    this.previous = node;

    if(!node.previous){
      node.parent.leftChild = node;
    }
  }

  public extract(): HtmlVertex{
    this.previous.next = this.next.previous;
    
    return this
  }
}
