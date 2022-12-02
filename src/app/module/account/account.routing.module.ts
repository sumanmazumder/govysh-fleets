import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from "./account/account.component"



const routes: Routes = [
  {path: '', redirectTo: 'account', pathMatch:"full"},
  {path: 'account', component: AccountComponent, data:{breadcrumb: 'Account', title: 'account'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule { }
