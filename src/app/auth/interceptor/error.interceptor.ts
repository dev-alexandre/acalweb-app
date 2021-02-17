import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private authService: NbAuthService,
    private router: Router,
    ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {

      if (err.status === 401 || err.status === 403) {
        localStorage.removeItem('auth_app_token');
        this.authService.logout('email');
        this.router.navigateByUrl('/auth/login');
      }

      const error = err.error || err.error.message || err.statusText;

      return throwError(error);
    }));
  }


}
