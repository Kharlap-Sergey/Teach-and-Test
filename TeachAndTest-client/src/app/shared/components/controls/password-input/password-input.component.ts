import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Self,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { CustomInputComponent } from '@shared/components/controls/custom-input/custom-input.component';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent extends CustomInputComponent {
  constructor(public controlDir: NgControl) {
    super(controlDir);
  }

  changeType(event: Event){
    event.preventDefault();
    if(this.type == "text"){
      this.type = "password"
    }else{
      this.type = "text"
    }
  }

  ngOnInit(){
    this.type = "password";
    super.ngOnInit();
  }
}
