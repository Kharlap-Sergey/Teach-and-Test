import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FileService } from './../../services/file.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent implements OnInit {
  @Output() onComplete = new EventEmitter();
  @ViewChild("plus") plus: any;

  public imageBlobUrl: any = "assets/image.png"
  public selectedFile: File = null;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.createImageFromBlob(this.selectedFile);
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
        this.onComplete.emit(res);
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

  handlePlusClick(){
    console.log(`this.input`, this.plus.nativeElement.click)
    this.plus.nativeElement.click()
  }
}
