import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversComponent } from "./drivers/drivers.component";



const routes: Routes = [
  {path: '', redirectTo: 'driver', pathMatch:"full"},
  {path: 'driver', component: DriversComponent, data:{breadcrumb: 'Driver', title: 'driver'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRoutingModule { }
