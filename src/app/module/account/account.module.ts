import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from "./account.routing.module";
import { AccountComponent } from "./account/account.component";
import { MaterialModule } from "../../share/material/material.module";
import  { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AccountComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }
