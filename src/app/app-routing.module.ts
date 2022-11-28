import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'login'},
  {path:'login', component: LoginComponent},
  {path: 'dashboard', data: {breadcrumb: 'Dashbord'}, children:[
    {path: 'rides',
        data: {breadcrumb: 'rides'},
      loadChildren: () => import('./module/rides/rides.module').then(m => m.RidesModule) },

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
