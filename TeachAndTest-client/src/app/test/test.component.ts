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
  firstName = new FormControl();
  email = new FormControl('', [
    this.Validator.bind(this),
  ]);
  // password = new FormControl('', [Validators.required]);
  formG = new FormGroup({
    email: this.email,
    firstName: this.firstName,
  });
  constructor() {}

  ngOnInit(): void {
    console.log(this.formG);
  }

  Validator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    console.log(this.formG);
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
