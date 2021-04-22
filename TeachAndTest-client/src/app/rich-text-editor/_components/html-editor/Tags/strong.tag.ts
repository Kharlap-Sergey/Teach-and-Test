import { BaseTag } from './base.tag';

export class StrongTag extends BaseTag {
  constructor(innerContent: string = '') {
    super(innerContent);
  }

  public getHtmlContent = (innerContent: string) => {
    return `<strong>${super.getHtmlContent(
      innerContent
    )}</strong>`;
  };
}
