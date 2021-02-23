import { Component, OnInit } from '@angular/core';
import { AuthControllService } from './shared/services/auth-controll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  token = "";

  constructor(private authControllService: AuthControllService){

  }

  onClick(){
    this.authControllService.SetToken("reset");
  }
  ngOnInit(){
    this.authControllService.token.subscribe(
      (token: string) => {this.token = token}
    )
  }
}
