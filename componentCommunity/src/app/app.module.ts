import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PriceQuoteComponent } from './price-quote/price-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    PriceQuoteComponent
  ],

  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
