import { Component, Input, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() public user: User

  constructor(
    private spinner: NgxSpinnerService
  ) {
    this.user = null;
  }

  ngOnInit(): void {
  }
}
