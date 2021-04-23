import { Guid } from 'guid-typescript';
import { BaseTag } from './base.tag';

export class PTag extends BaseTag {
  constructor(
    innerContent: string = '',
    id: Guid = null
  ) {
    super(innerContent);
    this.id = id;
  }

  public getHtmlContent(innerContent: any): any {
    const p = document.createElement('p');
    p.id = this.id.toString();
    return p;
  }
}
