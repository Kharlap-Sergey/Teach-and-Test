import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.scss']
})
export class TeachComponent implements OnInit {
  public title: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
