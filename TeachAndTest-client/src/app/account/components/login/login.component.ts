import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  info: any;
  token: string;
  constructor(private remoteService: AccountService) {}

  ngOnInit(): void {}

  onClick() {
    this.remoteService.testAuth(this.token).subscribe((data: any) => {
      this.info = JSON.stringify(data);
    });
  }

  onSubmit(value: any): void {
    //this.remoteService.test().subscribe((data: any) => this.info = data );
    this.remoteService.loginUser(value).subscribe((data: any) => {
      this.info = JSON.stringify(data);
      this.token = data.token;
    });
  }
}
