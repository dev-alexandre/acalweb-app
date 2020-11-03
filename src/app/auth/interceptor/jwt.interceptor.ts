import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { User } from '../user.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  public currentUser: User;
  public token: NbAuthJWTToken;

  constructor(private authService: NbAuthService) {
    this.authService.onTokenChange()
      .subscribe( (token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.currentUser = token.getPayload();
        this.token = token;
      }}
    );
  }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.token && this.token) {
          request = request.clone({
              setHeaders: {
                  Authorization: `Bearer ${this.token}`
              }
          });
      }

      return next.handle(request);
  }

}
