import { IHtmlContent } from '../html-content.interface';

export class BaseTag implements IHtmlContent {
  private _innerContent: string;
  
  public get innerContent(): string {
    return this._innerContent;
  }

  constructor(innerContent: string = ""){
    this._innerContent = innerContent
  }

  public getHtmlContent = (innerContent: string) => {
    return this.HtmlEncode(innerContent + this.innerContent);
  };

  private HtmlEncode(str: string)
  {
    var el = document.createElement("div");
    el.innerText = el.textContent = str;
    str = el.innerHTML;
    return str;
  }
}
