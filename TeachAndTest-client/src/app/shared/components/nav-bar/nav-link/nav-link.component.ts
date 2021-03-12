import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavLinkComponent implements OnInit {
  @Input() to: string;

  constructor() { }

  ngOnInit(): void {
  }

}
