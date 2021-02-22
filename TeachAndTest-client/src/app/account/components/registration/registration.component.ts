import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  constructor(private remoteService: AccountService) { }

  ngOnInit(): void {
  }

  onSubmit(value: any): void {
    this.remoteService.registrateNewUser(value);
  }
}
