import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss']
})
export class NavDrawerComponent implements OnInit {

  private _isDrawerOpen: boolean = false;

  @Input() pathObjects: any;
  @HostBinding('class.drawer-open') get
  isDrawerOpen(): boolean{
    return this._isDrawerOpen;
  }

  set isDrawerOpen(value: boolean){
    this._isDrawerOpen = value;
  }

  constructor() { }

  ngOnInit() {
  }

  onTriggerDrawer(){
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  onNavLinkClicked($event: MouseEvent) {
    this.isDrawerOpen = false;
  }

}
