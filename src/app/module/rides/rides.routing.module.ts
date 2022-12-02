import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RidesComponent } from "./rides/rides.component";



const routes: Routes = [
  {path: '', redirectTo: 'rides', pathMatch:"full"},
  {path: 'rides', component: RidesComponent, data:{breadcrumb: 'Rides', title: 'rides'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RidesRoutingModule { }
