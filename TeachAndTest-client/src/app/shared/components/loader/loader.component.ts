import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Guid } from 'guid-typescript';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent implements OnInit {
  private _isLoading: boolean;
  @Input() public set isLoading(value: boolean) {
    if (value) {
      this.spinner.show(this.id);
    } else {
      this.spinner.hide(this.id);
    }
    this._isLoading = value;

    console.log(`this.isLoading`, this._isLoading);
  }

  public id: string;
  constructor(private spinner: NgxSpinnerService) {
    this.id = Guid.create().toString();
  }

  ngOnInit(): void {}
}
