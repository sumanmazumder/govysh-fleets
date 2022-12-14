import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler,  HttpRequest} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class headerInterceptor implements HttpInterceptor{

    constructor(
        private LoginService:AuthService
        ){}

        
        ngOnInit(): void { 
            console.log(this.LoginService.fleetId);
              
        }

        intercept(req: HttpRequest<any>, next: HttpHandler){
            if(!this.LoginService.fleetId){
                return next.handle(req);
            }
            let header = req.headers.set('Authorization', `Bearer ${this.LoginService.fleetId}`);

            const Tokensend = req.clone({
                headers: header
            });

            return next.handle(Tokensend);
        }
}

