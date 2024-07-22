import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { UserService } from './user.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private login: LoginService) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //add the jwt token (local storage) request
        let authreq = request;

        const token = this.login.getToken();
        
        console.log(token);
        console.log("inside interceotor");


        if (token != null) {
            authreq = authreq.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
                
            });
            console.log("Heloo"+ authreq)
        }
        return next.handle(authreq);


    }

}

export const AuthInterceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
}];