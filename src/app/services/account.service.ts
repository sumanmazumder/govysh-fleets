import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private apiServices: ApiService,
    private http: HttpClient
  ) { }

  accountDetails(id:string){
    let url = this.apiServices.getUrl(`fleet/getfleetdetailsbyid?fleetId=${id}`);
    return this.http.get(url);
  }
  accountUpdate(payload:any){
    let url = this.apiServices.getUrl(`fleet/update`);
    return this.http.post(url, payload);
  }
}
