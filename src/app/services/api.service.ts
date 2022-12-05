import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  public getUrl(url: string): string {
    return `${environment.apiEndPoint}/${url}`;
  }
}
