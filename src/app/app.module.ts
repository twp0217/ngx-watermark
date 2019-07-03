import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxWatermarkModule } from '@twp0217/ngx-watermark';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxWatermarkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
