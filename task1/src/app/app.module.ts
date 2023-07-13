import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolarSystemComponentModule } from "./components/solar-system-component/solar-system-component.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SolarSystemComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
