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
  apisToSkip = ['access-tokens', 'v1/customers', 'v1/movies/'];

  skipRoute(api, request) {
    if (request.url.indexOf(api) > -1 && request.method !== 'PUT') { // added to cope with existing design of endpoints.
      return true;
    } else {
      return false;
    }
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const skipToken = this.apisToSkip.find((api) =>
      this.skipRoute(api, request)
    );
    if (skipToken) {
      return next.handle(request);
    }
    request = request.clone({
      headers: request.headers.set(
        'X-ACCESS-TOKEN',
        `${this.authenticationService.getToken()}`
      ),
    });
    return next.handle(request);
  }
}
