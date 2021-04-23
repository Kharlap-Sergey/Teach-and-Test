import { HtmlVertex } from './html-vertex';

export class HtmlEditorControl {
  private _root: HtmlVertex;

  public get root(): HtmlVertex {
    return this._root;
  }

  constructor(contentRoot: HtmlVertex) {
    this._root = contentRoot;
  }

  public getContent(
    node: HtmlVertex = this.root,
    parent: any = null
  ): any {
    let content: any = '';
    if (node === null) return null;

    content = node.tag.getHtmlContent(null);
    console.log(`content`, content);
    this.getContent(
      node.leftChild,
      content
    );
    if (!parent) return content;
    if (content) {
      parent.appendChild(content);
    }

   this.getContent(
      node.next,
      parent
    );
    return content;
  }
}
