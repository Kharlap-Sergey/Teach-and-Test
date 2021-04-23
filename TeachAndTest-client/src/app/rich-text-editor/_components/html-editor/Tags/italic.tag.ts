import { BaseTag } from './base.tag';
import { Guid } from 'guid-typescript';

export class ItalicTag extends BaseTag {
  constructor(innerContent: string = '', id: Guid) {
    super(innerContent);
    this.id = id;
  }

  public getHtmlContent(innerContent: any): any {
    return `<em id=${this.id}>${super.getHtmlContent(
      innerContent
    )}</em>`;
  };
}
