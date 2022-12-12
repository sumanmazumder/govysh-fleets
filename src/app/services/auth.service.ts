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
  public userId: string;
  public apiToken : string = '';
  public permission : any[] = [];
  public userName : string;
  public userEmail : string;

  constructor(
    private apiServices: ApiService,
    private http: HttpClient,
  ) { }

  login(payload:any){
    let url = this.apiServices.getUrl('api/auth/fleet/signin');
    return this.http.post(url, payload);
  }
  signUp(payload:any){
    let url = this.apiServices.getUrl('auth/fleet/signup');
    return this.http.post(url, payload);
  }

  public setUser(user : AuthInterface){
    this.userId = user.id;
    this.apiToken = user.token;
    this.permission = user.roles;
    this.userName = user.username;
    this.userEmail = user.email;
    // store.set(user.token);
  }
}
