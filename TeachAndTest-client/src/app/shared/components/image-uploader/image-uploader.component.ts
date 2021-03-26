import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiRoutes } from '@app/shared/utils/api-routes';
import { FileService } from './../../services/file.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent implements OnInit {
  public imageBlobUrl: any = "assets/image.png"
  public selectedFile: File = null;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  sendTosServer() {
    const fd = new FormData();

    fd.append(
      'image',
      this.selectedFile,
      this.selectedFile.name
    );

    this.fileService.upload(fd).subscribe(
      (res : any)=> {
        console.log(`res`, res[0].id)
        this.loadFrom(res[0].id);
      }
    )
  }

  createImageFromBlob(image: Blob) {

    this.fileService.readDataFromBlob(image).onload = (
      reader
    ) => {
      console.log(`reader`, reader)
      this.imageBlobUrl = reader.target.result;
    };
  }

  async loadFrom(id: string) {
    this.fileService
      .downloadImage(id)
      .subscribe((response) => {
        this.createImageFromBlob(response);
      });
  }
}
