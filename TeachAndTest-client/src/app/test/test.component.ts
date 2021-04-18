import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from 'src/app/shared/utils/api-routes';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorageWrapper } from './../shared/utils/local-storage-wrapper';
import { PortalService } from './../portal/portal.service';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { SubmitButtonComponent } from '@app/shared/components/controls/submit-button/submit-button.component';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { inputs } from '@syncfusion/ej2-angular-richtexteditor/src/rich-text-editor/richtexteditor.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  //use it to override the children style' class (.angular-editor-toolbar)
  encapsulation: ViewEncapsulation.None,
})
export class TestComponent
  implements OnInit, AfterViewInit {
  /**
   *
   */
  testvalue: any = {};
  @ViewChild('img') img: any;
  isModalOpened = true;
  onClose(event: any) {
    this.isModalOpened = false;
  }
  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private portal: PortalService
  ) {
    LocalStorageWrapper.setItem('abc', 'sergey');
    console.log(
      `object`,
      LocalStorageWrapper.getItem('abc')
    );
  }
  show() {
    this.portal.show(SubmitButtonComponent);
  }
  ngAfterViewInit(): void {}
  ngOnInit(): void {}
  public file: any;
  image: any;
  imageBlobUrl: any = '';
  selectedFile: File = null;

  onFileSelected(event: any) {
    console.log(
      `event.target.files`,
      event.target.files
    );
    this.selectedFile = <File>event.target.files[0];
  }

  sendTosServer() {
    const fd = new FormData();

    // https://developer.mozilla.org/ru/docs/Web/API/FormData/append
    fd.append(
      'image',
      this.selectedFile,
      this.selectedFile.name
    );
    console.log(fd.getAll('image'));
    this.http
      .post(ApiRoutes.HostsApi + '/files/upload', fd)
      .subscribe((res) => {
        console.log('res: ', res);
      });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imageBlobUrl = reader.result;
      },
      false
    );
    if (image) {
      reader.readAsDataURL(image);
    }
  }
  async loadFrom() {
    this.http
      .get(
        ApiRoutes.HostsApi +
          `/files/DownloadImage/255def21-d50d-43a9-958b-faf6de5bbcd8`,
        { responseType: 'blob' }
      )
      .subscribe((response) => {
        console.log(`response`, response);
        this.createImageFromBlob(response);
      });

    console.log(`img`, this.img);
  }
}
