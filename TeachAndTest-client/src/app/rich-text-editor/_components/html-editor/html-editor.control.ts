import { HtmlVertex } from "./html-vertex";

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

    // body.tag = {
    //   open: '<body>',
    //   style: {},
    //   close: '</body>',
    // };

    return body;
  }

  public addNodeToParent(
    nodeToBeAdded: HtmlVertex,
    parentNode: HtmlVertex = this.root
  ): HtmlVertex {
    parentNode.insertChild(nodeToBeAdded);
    return nodeToBeAdded;
  }

  public addNodeAfterNode(
    node: HtmlVertex,
    nodeToBeAdded: HtmlVertex
  ): HtmlVertex {
    node.parent.insertChild(nodeToBeAdded);
    node.insertAfter(nodeToBeAdded);

    return nodeToBeAdded;
  }

  // public getContent(node: HtmlVertex = this.root): string {
  //   let content = '';
  //   if (node.tag !== null) {
  //     content += node.tag.open;
  //   }

  //   if (node.content !== null) {
  //     content += node.content;
  //   }

  //   if (node.children.length) {
  //     content += this.getContent(node.children[0]);
  //   }
  //   if (node.next != null) {
  //     content += this.getContent(node.next);
  //   }
  //   if (node.tag !== null) {
  //     content += node.tag.close;
  //   }

  //   return content;
  // }
}
