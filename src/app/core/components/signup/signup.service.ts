import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Signup } from './signup';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  api = environment.api;
  constructor(private httpClient: HttpClient) { }

  signup(signupDetail: Signup) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.post(`${this.api}customers`, signupDetail);
  }
}
