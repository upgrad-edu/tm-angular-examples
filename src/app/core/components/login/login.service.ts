import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Login, User } from './login';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user = new Subject<User>();
  api = environment.api;

  constructor(
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  login(loginDetail: Login) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.post(`${this.api}access-tokens`, loginDetail).pipe(
      catchError(this.errorHandler),
      tap((response: User) => {
        const user = new User(response);
        this.authenticationService.setUser(response);
        this.authenticationService.setToken(response.jwtToken);
        this.user.next(user);
      })
    );
  }

  private errorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = 'Error!'; // ideally all errors must be handled and there has to be meaning ful description
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    if (errorRes.error && errorRes.error.error) {
      errorMessage = errorRes.error.error;
    }

    return throwError(errorMessage);
  }
}
