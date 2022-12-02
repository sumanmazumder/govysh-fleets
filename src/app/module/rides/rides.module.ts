import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../share/material/material.module"
import { RidesRoutingModule } from "./rides.routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RidesRoutingModule
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RidesModule { }
