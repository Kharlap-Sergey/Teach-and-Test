import { Guid } from 'guid-typescript';
import { BaseTag } from './base.tag';

export class UnderlineTag extends BaseTag {
  constructor(
    innerContent: string = '',
    private id: Guid
  ) {
    super(innerContent);
  }

  public getHtmlContent = (innerContent: string) => {
    return `<u id=${this.id}>${super.getHtmlContent(
      innerContent
    )}</u>`;
  };
}
