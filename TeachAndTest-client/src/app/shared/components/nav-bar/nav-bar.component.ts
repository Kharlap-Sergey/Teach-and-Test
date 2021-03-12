import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent
  implements OnInit, AfterViewInit {
  @ViewChild('navbar') navBar: any;

  private previousY: number;
  pathObjects = [
    {
      to: '/',
      content: 'home',
    },
    {
      to: '/account/login',
      content: 'login',
    },
    {
      to: '/account/registration',
      content: 'register',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    console.log(this.navBar.nativeElement);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event) {
    if (this.previousY) {
      let opacity = 1;
      let z = 0;
      let deltaH = Math.abs(
        this.previousY - window.pageYOffset
      );
      if (deltaH < 50) return;
      if (this.previousY < window.pageYOffset) {
        opacity = 0;
        z = -1;
      }
      this.navBar.nativeElement.style.opacity = opacity;
      this.navBar.nativeElement.style.zIndex = z;
    }
    this.previousY = window.pageYOffset;
  }

  selected(to: string){
    return this.router.url == to;
  }
}
