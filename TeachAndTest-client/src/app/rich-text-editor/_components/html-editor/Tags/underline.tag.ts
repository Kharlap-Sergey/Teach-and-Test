import { BaseTag } from './base.tag';

export class UnderlineTag extends BaseTag {
  constructor(innerContent: string = '') {
    super(innerContent);
  }

  public getHtmlContent = (innerContent: string) => {
    return `<u>${super.getHtmlContent(innerContent)}</u>`;
  };
}
