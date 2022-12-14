import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { AuthInterface } from "../interface/auth";
import {Store} from "@ngrx/store";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user : AuthInterface;
  // public userId: string;
  // public apiToken : string = '';
  // public permission : any[] = [];
  // public userName : string;
  // public userEmail : string;
  public fleetId : string | any;
  // public contactPersonName : string | any;
  // public companyName : string | any;

  public userData = {}

  constructor(
    private apiServices: ApiService,
    private http: HttpClient,
  ) { }

  login(payload:any){
    let url = this.apiServices.getUrl('api/auth/fleet/signin');
    return this.http.post(url, payload);
  }
  signUp(payload:any){
    let url = this.apiServices.getUrl('api/auth/fleet/signup');
    return this.http.post(url, payload);
  }

  public setUser(user : AuthInterface){
    console.log(user);
    this.fleetId = user.fleetId;
    // this.userEmail = user.email;
    // this.contactPersonName = user.contactPersonName;
    this.userData = user
    // store.set(user.token);
    localStorage.setItem('fleetId', this.fleetId)
    localStorage.setItem('fleetUserDetails', JSON.stringify(this.userData));
  }


  requestOTP(payload:any){
    let url = this.apiServices.getUrl(`api/auth/requestotp`);
    return this.http.post(url, payload);
  }
  




  verifyOTP(payload:any){
    let url = this.apiServices.getUrl('api/auth/verifyotp');
    return this.http.post(url, payload);
  }
}
