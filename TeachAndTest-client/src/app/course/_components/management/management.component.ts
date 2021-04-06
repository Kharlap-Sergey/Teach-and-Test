import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent implements OnInit {
  public id: string;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(`id`, this.id)
  }
}
