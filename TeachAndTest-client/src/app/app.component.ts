import { Component, OnInit } from '@angular/core';
import { AuthControlService } from 'src/app/shared/services/auth-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  token = "";

  constructor(private authControlService: AuthControlService){

  }

  onClick(){
    this.authControlService.SetToken("reset");
  }
  ngOnInit(){
    this.authControlService.token.subscribe(
      (token: string) => {this.token = token}
    )
  }
}
