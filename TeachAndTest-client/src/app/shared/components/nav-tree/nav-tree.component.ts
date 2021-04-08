import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  ChangeDetectorRef,
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
export class NavTreeComponent
  implements OnInit, AfterViewChecked {
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

  constructor(
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.setSelection(this.router.url);
    if (!this.isNavTreeRow(this.navTreeRow.content)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const url = event.urlAfterRedirects;
          this.isSelected =
            url.search(
              this.navTreeRow.content.toString()
            ) >= 0;
        }
      });
    }
  }
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  setSelection(url: string) {
    if (this.isNavTreeRow(this.navTreeRow.content))
      return;
    this.isSelected =
      url.search(this.navTreeRow.content.toString()) >=
      0;
  }
  isNavTreeRow(obj: any): boolean {
    return obj instanceof Array;
  }

  shouldBeOpened(model: NavTreeModel): boolean {
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
