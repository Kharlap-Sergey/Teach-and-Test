export class HtmlVertex {
  private _contentLength: number = 0;

  public tag: any = null;
  public content: string = null;
  public parent: HtmlVertex = null;
  public children: HtmlVertex[] = [];
  public previous: HtmlVertex = null;
  public next: HtmlVertex = null;

  public recalculateLength() {
    this._contentLength = 0;

    for (let child of this.children) {
      this._contentLength += child._contentLength;
    }

    this.parent.recalculateLength();
  }

  public addChild(node: HtmlVertex) {
    node.parent = this;
    this.children.push(node);
  }

  public insertAfter(node: HtmlVertex) {
    node.previous = this;
    node.next = this.next;
    this.next = node;
  }
}

export class HtmlEditorControl {
  private _root: HtmlVertex;

  public get root(): HtmlVertex {
    return this._root;
  }

  constructor(contentRoot: HtmlVertex) {
    this._root = contentRoot;
  }
  static CreateBodyVertex(): HtmlVertex {
    const body = new HtmlVertex();

    body.tag = {
      open: '<body>',
      style: {},
      close: '</body>',
    };

    return body;
  }

  public addNodeToParent(
    nodeToBeAdded: HtmlVertex,
    parentNode: HtmlVertex = this.root
  ): HtmlVertex {
    parentNode.addChild(nodeToBeAdded);
    return nodeToBeAdded;
  }

  public addNodeAfterNode(
    node: HtmlVertex,
    nodeToBeAdded: HtmlVertex
  ): HtmlVertex {
    node.parent.addChild(nodeToBeAdded);
    node.insertAfter(nodeToBeAdded);

    return nodeToBeAdded;
  }

  public getContent(node: HtmlVertex = this.root): string {
    let content = '';
    if (node.tag !== null) {
      content += node.tag.open;
    }

    if (node.content !== null) {
      content += node.content;
    }

    if (node.children.length) {
      content += this.getContent(node.children[0]);
    }
    if (node.next != null) {
      content += this.getContent(node.next);
    }
    if (node.tag !== null) {
      content += node.tag.close;
    }

    return content;
  }
}
