import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, AfterViewInit{
  @ViewChild('navbar') navBar: any;
  previousY: number;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    console.log(this.navBar.nativeElement);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event) {
    if(this.previousY){
      let opacity = 1;
      let deltaH = Math.abs(this.previousY - window.pageYOffset)
      if(deltaH < 50)return;
      if(this.previousY < window.pageYOffset ){
        opacity = 0;
      }
      this.navBar.nativeElement.style.opacity =
        opacity ;
    }
    this.previousY = window.pageYOffset;
  }
}
