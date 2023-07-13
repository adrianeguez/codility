import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarSystemComponent } from "./solar-system-component.component";


@NgModule({
  declarations: [SolarSystemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SolarSystemComponent
  ]
})
export class SolarSystemComponentModule {
}
