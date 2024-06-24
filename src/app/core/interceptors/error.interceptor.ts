import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { NotificationService } from '../themes/notification.service';
import { IErrorModel } from '../models/error.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
        let errorMsg = '';
        this.notificationService.showError(errorResponse.error.title);
        errorResponse.error?.errors?.forEach((err: IErrorModel) => {
          this.notificationService.showError(err.message);
        });
        /*         errorMsg = errorResponse.error?.errors?.message;
        this.notificationService.showError(errorMsg); */
        return throwError(errorMsg);
      })
    );
  }
}
