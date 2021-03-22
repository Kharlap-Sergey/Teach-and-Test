import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from 'src/app/shared/utils/api-routes';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  /**
   *
   */
  constructor(private http: HttpClient) {}
  public file: any;

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
    console.log(fd.getAll("image"));
    this.http
      .post(ApiRoutes.HostsApi + '/files/upload', fd)
      .subscribe((res) => {
        console.log('res: ', res);
      });
  }
  async loadFrom() {
    const options = {
      method: "GET",
      headers: {
      },
    };
    const response = await fetch(ApiRoutes.HostsApi + `/files/download/2053c2f5-3b72-46d4-ac06-db21b96ac45d`, options)
    if (response.ok) {
      const data = await response.blob();
      var reader = new FileReader();

      reader.onload = function (event) {
        console.log(`event`, event)
      };

      reader.readAsDataURL(data);
    } else {
    }
    // this.http
    //   .get(ApiRoutes.HostsApi + `/files/download/2053c2f5-3b72-46d4-ac06-db21b96ac45d`, options)
    //   .subscribe((res) => {
    //     console.log('res: ', res);
    //   });
  }
}
