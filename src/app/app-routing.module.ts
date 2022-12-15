import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './share/dashboard/dashboard.component';
import { AuthGuard } from "./auth.guard";
import { GuestGuard } from "./guest.guard";


const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', canActivate:[GuestGuard], component: LoginComponent},
  {path:'signup', canActivate:[GuestGuard], component: RegisterComponent},

  {path: 'dashboard', component: DashboardComponent,

  children:[
    {path: '', pathMatch: 'full', redirectTo: 'rides'},
    {path: 'rides', canActivate:[AuthGuard], data: {breadcrumb: 'Rides'}, loadChildren: () => import('./module/rides/rides.module').then(m => m.RidesModule)},
    {path: 'drivers', canActivate:[AuthGuard], data: {breadcrumb: 'Drivers'}, loadChildren: () => import('./module/drivers/drivers.module').then(m => m.DriversModule)},
    {path: 'account', canActivate:[AuthGuard], data: {breadcrumb: 'Account'}, loadChildren: () => import('./module/account/account.module').then(m => m.AccountModule)},
    {path: 'earning-and-withdrawal', canActivate:[AuthGuard], data: {breadcrumb: 'Account'}, loadChildren: () => import('./module/earning-and-withdrawal/earning-and-withdrawal.module').then(m => m.EarningAndWithdrawalModule)},
    {path: 'help-and-support', canActivate:[AuthGuard], data: {breadcrumb: 'Account'}, loadChildren: () => import('./module/help-and-support/help-and-support.module').then(m => m.HelpAndSupportModule)},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
