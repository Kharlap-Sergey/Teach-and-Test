import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { ReactiveInputComponent } from './components/controls/reactive-input/reactive-input.component';
import { PasswordInputComponent } from './components/controls/password-input/password-input.component';
import { CustomInputComponent } from './components/controls/custom-input/custom-input.component';
import { SubmitButtonComponent } from './components/controls/submit-button/submit-button.component';
import { InputErrorsComponent } from './components/controls/input-errors/input-errors.component';
import { LinkComponent } from './components/link/link.component';
import { RouterModule } from '@angular/router';
import { GoogleAuthBtnComponent } from './components/controls/google-auth-btn/google-auth-btn.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavLinkComponent } from './components/nav-bar/nav-link/nav-link.component';
import { ShowLoaderDirective } from './_directives/show-loader.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavDrawerComponent } from './components/nav-bar/nav-drawer/nav-drawer.component';
import { SafeHtmlUrlPipe } from './_pipes/safe-html-url.pipe';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    ReactiveInputComponent,
    PasswordInputComponent,
    CustomInputComponent,
    SubmitButtonComponent,
    InputErrorsComponent,
    LinkComponent,
    GoogleAuthBtnComponent,
    NavBarComponent,
    NavLinkComponent,
    ShowLoaderDirective,
    LoaderComponent,
    NavDrawerComponent,
    SafeHtmlUrlPipe,
    ModalComponent
  ],
  imports: [
  NgxSpinnerModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ReactiveInputComponent,
    PasswordInputComponent,
    SubmitButtonComponent,
    LinkComponent,
    GoogleAuthBtnComponent,
    NavBarComponent,
    ShowLoaderDirective,
    LoaderComponent,
    SafeHtmlUrlPipe,
    ModalComponent,
  ],
})
export class SharedModule {}
