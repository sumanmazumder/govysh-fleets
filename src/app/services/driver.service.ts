import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(
    private apiServices: ApiService,
    private http: HttpClient
  ) { }

  driverList(id: string){
    let url = this.apiServices.getUrl(`fleet/getfleetdriversbyid?fleetId=${id}`);
    return this.http.get(url);
  }
}
