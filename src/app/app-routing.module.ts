import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './share/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: RegisterComponent},

  {path: 'dashboard', component: DashboardComponent,

  children:[
    {path: '', pathMatch: 'full', redirectTo: 'rides'},
    {path: 'rides', data: {breadcrumb: 'Rides'}, loadChildren: () => import('./module/rides/rides.module').then(m => m.RidesModule)},
    {path: 'drivers', data: {breadcrumb: 'Drivers'}, loadChildren: () => import('./module/drivers/drivers.module').then(m => m.DriversModule)},
    {path: 'account', data: {breadcrumb: 'Account'}, loadChildren: () => import('./module/account/account.module').then(m => m.AccountModule)},
    {path: 'earning-and-withdrawal', data: {breadcrumb: 'Account'}, loadChildren: () => import('./module/earning-and-withdrawal/earning-and-withdrawal.module').then(m => m.EarningAndWithdrawalModule)},
    {path: 'help-and-support', data: {breadcrumb: 'Account'}, loadChildren: () => import('./module/help-and-support/help-and-support.module').then(m => m.HelpAndSupportModule)},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
