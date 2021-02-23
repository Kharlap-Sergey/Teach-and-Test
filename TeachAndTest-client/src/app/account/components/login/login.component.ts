import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  info: any;
  constructor(private remoteService: AccountService) {}

  ngOnInit(): void {}

  onSubmit(value: any): void {
    //this.remoteService.test().subscribe((data: any) => this.info = data );
    this.remoteService
      .loginUser(value)
      .subscribe((data: any) => {this.info = JSON.stringify(data)});
  }
}
