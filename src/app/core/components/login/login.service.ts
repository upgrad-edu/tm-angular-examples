import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = environment.api;
  constructor(private httpClient: HttpClient) { }

  login(loginDetail: Login) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.post(`${this.api}access-tokens`, loginDetail);
  }
}
