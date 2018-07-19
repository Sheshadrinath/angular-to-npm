import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddressComponent],
  exports: [AddressComponent]
})
export class AddressModule { }

