import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, empty } from 'rxjs';
import { AuthService } from "./services/auth.service";
import { map, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public apiToken : string | any;
  constructor(
    private authService: AuthService,
    private router: Router){
      this.apiToken = localStorage.getItem('apiToken');
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let accessToken = this.authService.getAuthStatus();
      console.log(accessToken);
      if(!accessToken){
        this.router.navigate(['./login']);
        return false;
      }
      return true;
    }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  // public canAccess(): Observable<boolean> | boolean {
  //   if (this.authService.user && this.authService.user.id) {
  //     return true;
  //   }

  //   return this.authService.getLoggedInUser().pipe(
  //     map(
  //       (user: any) => {
  //         // console.log(user);
  //         if (user.data && user.data.id) {
  //           this.authService.setUser(user['data'])
  //           return true;
  //         }
  //         this.router.navigateByUrl('/login');
  //         return false;
  //       },
  //       (error:any) => {
  //         this.router.navigateByUrl('/login');
  //         return false;
  //       }
  //     ),
  //     catchError((err:any, caught:any) => {
  //       this.router.navigateByUrl('/login');
  //       return empty();
  //     })
  //   );
  // }
}