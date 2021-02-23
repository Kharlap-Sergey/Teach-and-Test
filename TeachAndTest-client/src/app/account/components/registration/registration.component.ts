import { Component, OnInit, Self } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  info: any;
  constructor(private remoteService: AccountService) {}

  ngOnInit(): void {}

  onSubmit(value: any): void {
    //this.remoteService.test().subscribe((data: any) => this.info = data );
    this.remoteService
      .registrateNewUser(value)
      .subscribe((data: any) => {this.info = JSON.stringify(data)});
  }
}
