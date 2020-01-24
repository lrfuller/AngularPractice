import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { NgxMaskModule } from 'ngx-mask';
import { NgxTinymceModule } from 'ngx-tinymce';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternalComponent } from './internal/internal.component';
import { ExternalComponent } from './external/external.component';
import { ExternalV2Component } from './external-v2/external-v2.component';
import { UnderProcessingComponent } from './under-processing/under-processing.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    InternalComponent,
    ExternalComponent,
    ExternalV2Component,
    UnderProcessingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MyDatePickerModule,
    NgxMaskModule.forRoot(),
    NgxTinymceModule.forRoot({
      baseURL: './assets/tinymce/'
      // baseURL: './assets/js/tinymce/'
    }),
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
