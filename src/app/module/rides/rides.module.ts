import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../share/material/material.module"
import { RidesRoutingModule } from "./rides.routing.module";
import { RidesComponent } from "./rides/rides.component";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    RidesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RidesRoutingModule,
    FormsModule,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RidesModule { }
