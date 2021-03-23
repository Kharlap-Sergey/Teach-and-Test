import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtmlUrl',
})
export class SafeHtmlUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      html
    );
  }
}
