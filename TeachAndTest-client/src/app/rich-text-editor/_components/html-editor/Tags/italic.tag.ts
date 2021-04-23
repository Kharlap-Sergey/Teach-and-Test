import { BaseTag } from './base.tag';
import { Guid } from 'guid-typescript';

export class ItalicTag extends BaseTag {
  constructor(
    innerContent: string = '',
    private id: Guid
  ) {
    super(innerContent);
  }

  public getHtmlContent = (innerContent: string) => {
    return `<em id=${this.id}>${super.getHtmlContent(
      innerContent
    )}</em>`;
  };
}
