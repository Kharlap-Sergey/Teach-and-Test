import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
} from '@angular/router';
import { NavTreeModel } from '@app/shared/models/nav-tree.model';

@Component({
  selector: 'app-nav-tree',
  templateUrl: './nav-tree.component.html',
  styleUrls: ['./nav-tree.component.scss'],
})
export class NavTreeComponent implements OnInit {
  private _isSelected: boolean = false;

  public isOpened: boolean = false;
  @Input() public navTreeRow: NavTreeModel;
  @Output()
  public select = new EventEmitter<boolean>();

  public get isSelected(): boolean {
    return this._isSelected;
  }
  public set isSelected(value: boolean) {
    if (value == this._isSelected) return;

    this._isSelected = value;

    this.select.emit(value);
  }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          const url = event.urlAfterRedirects;
          this.setSelection(url);
      }
    });
    this.isOpened = this.shouldBeOpened(this.navTreeRow)
  }

  ngOnInit(): void {
    this.setSelection(this.router.url);
  }

  setSelection(url: string){
    if (this.isNavTreeRow(this.navTreeRow.content))
      return;
    this.isSelected = url.search(
      this.navTreeRow.content.toString()
    ) >= 0
  }
  isNavTreeRow(obj: any): boolean {
    return obj instanceof Array;
  }

  shouldBeOpened(model: NavTreeModel): boolean {
    return true;
    if (!this.isNavTreeRow(model.content)) {
      return (
        this.router.url.search(
          model.content.toString()
        ) >= 0
      );
    }

    var res = false;

    for (let row of model.content) {
      res ||= this.shouldBeOpened(row as NavTreeModel);
    }

    return res;
  }
}
