import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  constructor(
    private apiServices: ApiService,
    private http: HttpClient,
  ) { }

  allRides(id:string){
    let url = this.apiServices.getUrl(`fleet/getfleettripsbyid?fleetId=${id}`);
    return this.http.get(url);
  }
}
