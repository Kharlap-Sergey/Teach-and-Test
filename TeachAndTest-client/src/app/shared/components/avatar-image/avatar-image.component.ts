import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FileService } from './../../services/file.service';

@Component({
  selector: 'app-avatar-image',
  templateUrl: './avatar-image.component.html',
  styleUrls: ['./avatar-image.component.scss'],
})
export class AvatarImageComponent implements OnInit {
  private _imageId: string;
  public imageSrc: any = 'assets/image.png';

  @Input() public set imageId(value: string) {
    this._imageId = value;
    this.loadImage();
  }
  public get imageId(): string {
    return this._imageId;
  }


  constructor(private fileService: FileService) {}

  ngOnInit(): void {
  }

  private loadImage() {
    console.log("load")
    if (!this.imageId) {
      return;
    }
    this.fileService
      .downloadImage(this.imageId)
      .subscribe((image) => {
        this.fileService.readDataFromBlob(
          image
        ).onload = (reader) => {
          this.imageSrc = reader.target.result;
        };
      });
  }
}
