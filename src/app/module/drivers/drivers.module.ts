import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverRoutingModule } from "./drivers.routing.module";
import { DriversComponent } from "./drivers/drivers.component";
import  { FormsModule } from "@angular/forms";
import { MaterialModule } from "../../share/material/material.module";
@NgModule({
  declarations: [
    DriversComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    FormsModule,
    MaterialModule,
  ]
})
export class DriversModule { }
