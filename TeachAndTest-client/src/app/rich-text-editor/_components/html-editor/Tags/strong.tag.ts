import { Guid } from 'guid-typescript';
import { BaseTag } from './base.tag';

export class StrongTag extends BaseTag {
  constructor(
    innerContent: string = '',
    private id: Guid
  ) {
    super(innerContent);
  }

  public getHtmlContent = (innerContent: string) => {
    return `<strong id=${
      this.id
    }>${super.getHtmlContent(innerContent)}</strong>`;
  };
}
