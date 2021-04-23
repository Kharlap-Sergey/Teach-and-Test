import { Guid } from 'guid-typescript';
import { BaseTag } from './base.tag';

export class StrongTag extends BaseTag {
  constructor(innerContent: string = '', id: Guid) {
    super(innerContent);
    this.id = id;
  }

  public getHtmlContent(innerContent: any): any {
    return `<strong id=${
      this.id
    }>${super.getHtmlContent(innerContent)}</strong>`;
  };
}
