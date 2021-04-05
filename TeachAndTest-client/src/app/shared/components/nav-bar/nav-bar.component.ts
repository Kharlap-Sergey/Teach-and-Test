import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthControlService } from '@app/shared/services/auth-control.service';
import { Routes } from '@app/shared/utils/routes';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent
  implements OnInit, AfterViewInit {
  @ViewChild('navbar') navBar: any;

  private previousY: number;
  public isDrawlerOpen: boolean = false;
  public routes = Routes;
  public pathObjects = [
    {
      to: '/',
      content: 'home',
    },
    {
      to: "/test",
      content: 'test',
    },

    {
      to: this.routes.Course.Teach,
      content: 'teach',
    },

    {
      to: this.routes.Account.ProfilePage(1),
      content: 'test_profile',
    },
    {
      to: this.routes.Account.RegisterPage,
      content: 'register',
    },
  ];

  public user: any;

  constructor(
    private router: Router,
    private authControl: AuthControlService
  ) {
    this.authControl.currentUser.subscribe( user => {
      this.user = user;
    })
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
  }

  onDrawlerClick(value: boolean){
    this.isDrawlerOpen = !value;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event) {
    if (this.previousY) {
      let opacity = 1;
      let z = 100;
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

  selected(to: string) {
    return this.router.url == to;
  }
}
