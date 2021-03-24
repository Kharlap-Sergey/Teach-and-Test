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
  implements OnInit {

  reactive = new FormControl("", [
    Validators.required,
    this.Validator.bind(this),
  ]);

  password = new FormControl("", [
    Validators.required,
  ]);
  fg = new FormGroup(
    {
      inp: this.reactive,
      pas: this.password
    }
  )
  model: string
  constructor() {}

  ngOnInit(): void {
  }

  Validator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    if (control.value != '123456') {
      console.log(
        'control.value',
        control.value
      );
      return {
        'match to the pattern': false,
      };
    }
    return null;
  }
}
