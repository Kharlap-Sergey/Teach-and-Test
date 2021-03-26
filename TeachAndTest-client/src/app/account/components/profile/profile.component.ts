import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '@app/account/services/account.service';
import { User } from '@app/shared/models/user';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public id: number;
  public user: User;
  constructor(
    private activateRoute: ActivatedRoute,
    private accountService: AccountService
    ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.accountService.getUser(this.id)
    .subscribe(
      (user: User) => {
        this.user = user;
      }
    )
  }
}
