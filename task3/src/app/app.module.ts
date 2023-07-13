import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import {basketReducer} from "./basket/actions/reducer";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ basket: basketReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
