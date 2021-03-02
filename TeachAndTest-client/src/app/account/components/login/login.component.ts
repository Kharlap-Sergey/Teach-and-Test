import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AuthControllService } from './../../../shared/services/auth-controll.service';
import {
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  token: string;
  email = new FormControl();
  password = new FormControl();
  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });
  constructor(
    private remoteService: AccountService,
    private authControll: AuthControllService
  ) {}

  ngOnInit(): void {
    this.authControll.token.subscribe((token) => {
      this.token = token;
    });
  }

  activated = false;
  submitButtonHandler(e: any) {
    this.activated = true;
    if (this.loginForm.invalid) {
      e.preventDefault();
    }
  }

  onClick() {
    this.remoteService
      .testAuth(this.token)
      .subscribe((data: any) => {});
    this.remoteService
      .test()
      .subscribe((data: any) => {});
  }

  onSubmit(value: any): void {
    this.remoteService
      .loginUser(value)
      .subscribe((data: any) => {
        this.authControll.SetToken(data.token);
      });
  }
}
