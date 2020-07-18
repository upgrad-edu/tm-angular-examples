import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class CustomInterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}
  apisToSkip = ['access-tokens', 'v1/customers'];
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const skipToken = this.apisToSkip.find(api => request.url.indexOf(api) > -1);
    if (skipToken) {
      return next.handle(request);  
    }
    request = request.clone({
      headers: request.headers.set(
        'X-Access-Token',
        `${this.authenticationService.getToken()}`
      ),
    });
    return next.handle(request);
  }
}
