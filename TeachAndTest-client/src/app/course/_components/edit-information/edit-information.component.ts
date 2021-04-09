import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ParamMap,
  Router,
} from '@angular/router';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrls: ['./edit-information.component.scss'],
})
export class EditInformationComponent
  implements OnInit {

  private returnUrl: string
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activateRoute.queryParamMap.subscribe(
      (res: any) => {
        this.returnUrl = res.params.returnUrl
      }
    )
  }

  ngOnInit(): void {}

  goBack() {
    if(!this.returnUrl){
      return;
    }

    this.router.navigateByUrl(this.returnUrl);
  }
}
