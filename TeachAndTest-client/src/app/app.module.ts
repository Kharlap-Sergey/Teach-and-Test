import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SharedModule } from './shared/shared.module';
import { JwtInterceptor } from './shared/helpers/jwt.interceptor';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //https://www.npmjs.com/package/ngx-toastr
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,

    //https://www.npmjs.com/package/ngx-spinner
    NgxSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
