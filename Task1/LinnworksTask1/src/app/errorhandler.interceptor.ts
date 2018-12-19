import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material';
import { TokenService } from './token.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

    constructor(
        public snackBar: MatSnackBar,
        public tokenService: TokenService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    let snackBarRef = this.snackBar.open("Invalid authorization token", null, {
                        duration: 2000,
                    });

                    snackBarRef.afterDismissed().subscribe(() => {
                        this.tokenService.clearToken();
                        window.location.reload();
                    });
                }
            }
        }));
    }
}
