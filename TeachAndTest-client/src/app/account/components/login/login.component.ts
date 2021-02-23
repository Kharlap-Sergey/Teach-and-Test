import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AuthControllService } from './../../../shared/services/auth-controll.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  info: any;
  token: string;
  constructor(private remoteService: AccountService, private authControll: AuthControllService) {}

  ngOnInit(): void {
    this.authControll.token.subscribe((token) => {this.token = token})
  }

  onClick() {
    this.remoteService.testAuth(this.token).subscribe((data: any) => {
      this.info = JSON.stringify(data);
    });
  }

  onSubmit(value: any): void {
    //this.remoteService.test().subscribe((data: any) => this.info = data );
    this.remoteService.loginUser(value).subscribe((data: any) => {
      this.info = JSON.stringify(data);
      this.authControll.SetToken(data.token);
    });
  }
}
