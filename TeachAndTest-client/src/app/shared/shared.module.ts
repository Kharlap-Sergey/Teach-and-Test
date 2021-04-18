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
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { AvatarImageComponent } from './components/avatar-image/avatar-image.component';
import { NavTreeComponent } from './components/nav-tree/nav-tree.component';
import { ContentArrowComponent } from './components/nav-tree/content-arrow/content-arrow.component';
import { DropDownListComponent } from './components/controls/drop-down-list/drop-down-list.component';

@NgModule({
  declarations: [
    ReactiveInputComponent,
    PasswordInputComponent,
    CustomInputComponent,
    SubmitButtonComponent,
    InputErrorsComponent,
    LinkComponent,
    GoogleAuthBtnComponent,
    NavTreeComponent,
    NavBarComponent,
    NavLinkComponent,
    ShowLoaderDirective,
    LoaderComponent,
    NavDrawerComponent,
    SafeHtmlUrlPipe,
    ModalComponent,
    ImageUploaderComponent,
    AvatarImageComponent,
    ContentArrowComponent,
    DropDownListComponent
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
    NavTreeComponent,
    ShowLoaderDirective,
    LoaderComponent,
    SafeHtmlUrlPipe,
    ModalComponent,
    ImageUploaderComponent,
    AvatarImageComponent,
    DropDownListComponent,
  ],
})
export class SharedModule {}
