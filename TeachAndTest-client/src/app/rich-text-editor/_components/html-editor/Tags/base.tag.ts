import { Guid } from 'guid-typescript';
import { IHtmlContent } from '../html-content.interface';

export class BaseTag implements IHtmlContent {
  private _innerContent: string;

  public id: Guid;

  public get innerContent(): string {
    return this._innerContent;
  }

  constructor(innerContent: string = '') {
    this._innerContent = innerContent;
  }

  public getHtmlContent(innerContent: any): any {
    return (
      document.createTextNode(this._innerContent)
    );
  }

  protected getIdString() {
    return `id="${this.id}"`;
  }

  private HtmlEncode(str: string) {
    var el = document.createElement('div');
    el.innerText = el.textContent = str;
    str = el.innerHTML;
    return str;
  }
}
