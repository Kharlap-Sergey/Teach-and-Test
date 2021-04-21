import { BaseTag } from './base.tag';

export class ItalicTag extends BaseTag {
  constructor(innerContent: string = '') {
    super(innerContent);
  }

  public getHtmlContent = (innerContent: string) => {
    return `<em>${super.getHtmlContent(
      innerContent
    )}</em>`;
  };
}
