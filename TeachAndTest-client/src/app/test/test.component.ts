import {
  Component,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  constructor() {
    this.loading = false;
  }

  loadEmmet(){
    this.loading = true;

    setTimeout(() => {
      //this.loading = false;
    }, 2000)
  }
}
