import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {


    constructor(private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            this.manageErrors(err)
            return throwError(err);
        }))
    }

    public manageErrors(err: any) {
        if (err.status === 404) {
            this.router.navigateByUrl("/page-not-found");
            return;
        }
        else if (err.status === 400) {
            //Show errors in modal popup
        }
        else if (err.status === 500 || err.status === 0) {
            //Show error in modal popup
        }
    }
}
