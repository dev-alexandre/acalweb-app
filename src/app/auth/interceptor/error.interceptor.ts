import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NbAuthService } from '@nebular/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private authService: NbAuthService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {

      if (err.status === 401 || err.status === 403) {
        this.authService.logout('email');
        this.router.navigateByUrl('/auth/login');
      }

      const error = err.error || err.error.message || err.statusText;

      return throwError(error);
    }));
  }


}
