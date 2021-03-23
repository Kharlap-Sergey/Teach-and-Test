import { Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  /**
   *
   */
  @ViewChild("img") img: any;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
    ) {
      LocalStorageWrapper.setItem("abc", "sergey");
      console.log(`object`, LocalStorageWrapper.getItem("abc"));
    }
  public file: any;
  image: any;
  imageBlobUrl: any = "";
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
    reader.addEventListener("load", () => {
      this.imageBlobUrl =
      reader.result;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }
  async loadFrom() {
    this.http
      .get(
        ApiRoutes.HostsApi +
          `/files/DownloadImage/255def21-d50d-43a9-958b-faf6de5bbcd8`,
        { responseType: 'blob'}
      )
      .subscribe((response) => {
        console.log(`response`, response)
        this.createImageFromBlob(response);
      });

      console.log(`img`, this.img)
  }
}
