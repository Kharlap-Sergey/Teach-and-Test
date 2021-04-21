import { BaseTag } from './base.tag';

export class BodyTag extends BaseTag {
  constructor(innerContent: string = '') {
    super(innerContent);
  }

  public getHtmlContent = (innerContent: string) => {
    return `<body>${super.getHtmlContent(
      innerContent
    )}</body>`;
  };
}
