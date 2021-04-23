import { BaseTag } from './base.tag';

export class BodyTag extends BaseTag {
  constructor(innerContent: string = '') {
    super(innerContent);
  }

  public getHtmlContent(innerContent: any): any {
    const body = document.createElement("body");
    body.id = this.id.toString();

    return body
  }
}
