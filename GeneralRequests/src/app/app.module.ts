import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgxTinymceModule } from 'ngx-tinymce';
//wrong tinymce V
// import { EditorModule } from '@tinymce/tinymce-angular';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    NgxTinymceModule.forRoot({}),
    // EditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
