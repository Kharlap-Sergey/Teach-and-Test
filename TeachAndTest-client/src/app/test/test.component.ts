import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent
{
  loading: boolean;

  /**
   *
   */
  constructor(public spinner: NgxSpinnerService) {
    this.loading = false;
  }

  loadEmmet(){
    this.loading = true;
    this.spinner.show();
    setTimeout(() => {
      this.loading = false;
      this.spinner.hide();
    }, 2000)
  }
}
