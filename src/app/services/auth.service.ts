import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { AuthInterface } from "../interface/auth";
import {Store} from "@ngrx/store";
import { TokenInterface } from "../interface/tokenInterface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user : AuthInterface;
  // public userId: string;
  public apiToken : string = '';
  public setApiToken : string | any;
  // public permission : any[] = [];
  // public userName : string;
  // public userEmail : string;
  public fleetId : string | any;
  // public contactPersonName : string | any;
  // public companyName : string | any;
  public phone: string | any;
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
    this.userData = user
    localStorage.setItem("contactPersonName", user.contactPersonName);
    localStorage.setItem('fleetUserDetails', JSON.stringify(this.userData));
  }
  public setToken(userDetails: TokenInterface){
    console.log(userDetails)
    this.apiToken = userDetails.token;
    localStorage.setItem("apiToken", this.apiToken);
    this.fleetId = userDetails.userId;
    localStorage.setItem('fleetId', this.fleetId);
    this.phone = userDetails.phone
    localStorage.setItem('Phone', this.phone);
    localStorage.setItem("tokenDetails", JSON.stringify(userDetails));
    this.setApiToken = localStorage.getItem('apiToken');
  }


  requestOTP(payload:any){
    let url = this.apiServices.getUrl(`api/auth/requestotp`);
    return this.http.post(url, payload);
  }
  




  verifyOTP(payload:any){
    let url = this.apiServices.getUrl('api/auth/verifyotp');
    return this.http.post(url, payload);
  }

  getAuthStatus(){
    return localStorage.getItem("apiToken");
  }
}
