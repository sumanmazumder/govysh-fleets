import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EarningAndWithdrawalComponent } from "./earning-and-withdraw/earning-and-withdrawal.component";



const routes: Routes = [
  {path: '', redirectTo: 'earning-and-withdrawal', pathMatch:"full"},
  {path: 'earning-and-withdrawal', component: EarningAndWithdrawalComponent, data:{breadcrumb: 'Earning and with drawal', title: 'earning-and-withdrawal'}},
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarningAndWithdrawlRoutingModule { }
