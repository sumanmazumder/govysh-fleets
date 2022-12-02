import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpAndSupportComponent } from "./help-and-support/help-and-support.component";



const routes: Routes = [
  {path: '', redirectTo: 'help-and-support', pathMatch:"full"},
  {path: 'help-and-support', component: HelpAndSupportComponent, data:{breadcrumb: 'Help-and-support', title: 'help-and-support'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpAndSupportRoutingModule { }
