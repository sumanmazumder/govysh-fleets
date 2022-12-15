import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler,  HttpRequest} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class headerInterceptor implements HttpInterceptor{
    public apiToken : string | any
    constructor(
        private LoginService:AuthService
        ){
            console.log("every time call tokennnnnnnnnn");
            this.apiToken = localStorage.getItem('apiToken');
            console.log(this.apiToken);
        }

        
        ngOnInit(): void { 
            console.log(this.LoginService.apiToken);
            console.log(this.LoginService.setApiToken);
            console.log("every time call tokennnnnnnnnn");
        }

        intercept(req: HttpRequest<any>, next: HttpHandler){
            if(!this.apiToken){
                return next.handle(req);
            }
            let header = req.headers.set('Authorization', `Bearer ${this.apiToken}`);

            const Tokensend = req.clone({
                headers: header
            });

            return next.handle(Tokensend);
        }
}

