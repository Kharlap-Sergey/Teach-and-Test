import { Component, Input, OnInit } from '@angular/core';
import { NavTreeModel } from '@app/shared/models/nav-tree.model';

@Component({
  selector: 'app-nav-tree',
  templateUrl: './nav-tree.component.html',
  styleUrls: ['./nav-tree.component.scss']
})
export class NavTreeComponent implements OnInit {

  public isOpen: boolean = false;
  @Input() public navTreeRow: NavTreeModel;

  constructor() { }

  ngOnInit(): void {
  }

  IsNavTreeRow(obj: any): boolean{
    return (obj instanceof Array)
  }
}
