import {
  Component,
  OnInit,
  Self,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-registration',
  templateUrl:
    './registration.component.html',
  styleUrls: [
    './registration.component.scss',
  ],
})
export class RegistrationComponent
  implements OnInit {
  email = new FormControl();
  firstname = new FormControl();
  lastname = new FormControl();
  password = new FormControl();
  passwordRepined = new FormControl();

  registrationForm = new FormGroup({
    email: this.email,
    firstname: this.firstname,
    lastname: this.lastname,
    password: this.password,
  });

  info: any;
  constructor(
    private remoteService: AccountService
  ) {}
  ngOnInit(): void {}

  onSubmit(value: any): void {
    this.remoteService
      .registerNewUser(value)
      .subscribe((data: any) => {
        this.info = JSON.stringify(
          data
        );
      });
  }
}
