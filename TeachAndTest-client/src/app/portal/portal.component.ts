import { Component, Input, OnInit } from '@angular/core';
import { PortalInterface } from './portal.interface';
import { PortalService } from './portal.service';

@Component({
  selector: 'app-portal',
  template: `
    <p>
      portal works!
    </p>
  `,
  styles: [
  ]
})
export class PortalComponent implements OnInit, PortalInterface {
  @Input() name:string = "";

  constructor(private portalService: PortalService) {
    this.portalService.Subscribe(this);
   }

  show(name?: string) {
    console.log(name);
  }
  hide() {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
