import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ChartsModule } from 'ng2-charts'

import { FormsModule } from '@angular/forms';

//things installed:
import { MyDatePickerModule } from 'mydatepicker';
import { NgxMaskModule } from 'ngx-mask';
import { NgxTinymceModule } from 'ngx-tinymce';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    MyDatePickerModule,
    ChartsModule,
    NgxTinymceModule.forRoot({
      baseURL: './assets/tinymce/'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
