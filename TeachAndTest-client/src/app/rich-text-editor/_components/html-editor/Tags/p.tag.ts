import { BaseTag } from './base.tag';

export class PTag extends BaseTag {
  constructor(innerContent: string = '') {
    super(innerContent);
  }

  public getHtmlContent = (innerContent: string) => {
    return `<p>${super.getHtmlContent(
      innerContent
    )}</p>`;
  };
}
