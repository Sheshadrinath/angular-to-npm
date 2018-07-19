import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddressModule } from './modules/address/address.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AddressModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }

