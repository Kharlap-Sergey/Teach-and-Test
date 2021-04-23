import { Guid } from 'guid-typescript';
import { BaseTag } from './base.tag';

export class PTag extends BaseTag {
  constructor(
    innerContent: string = '',
    private id: Guid
  ) {
    super(innerContent);
  }

  public getHtmlContent = (innerContent: string) => {
    return `<p id=${this.id}>${super.getHtmlContent(
      innerContent
    )}</p>`;
  };
}
