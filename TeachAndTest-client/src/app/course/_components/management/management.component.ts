import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavTreeModel } from '@app/shared/models/nav-tree.model';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class ManagementComponent implements OnInit {
  public id: string;
  public navRows: NavTreeModel[] = [
    {
      title: 'some',
      content: [
        {
          title: 'sub1',
          content: 'sub1',
        },
        {
          title: 'sub2',
          content: 'sub2',
        },
      ],
    },
    {
      title: 'some1',
      content: 'some',
    },
    {
      title: 'some2',
      content: [
        {
          title: 'sub234',
          content: 'sub1',
        },
        {
          title: 'sub',
          content: 'sub2',
        },
      ],
    },
  ];
  constructor(private activateRoute: ActivatedRoute) {
    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(`id`, this.id);
  }
}
