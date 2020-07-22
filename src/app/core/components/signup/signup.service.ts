import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Signup } from './signup';
import { API } from '../../../shared/service/api';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  hosturl = environment.hosturl;
  constructor(private httpClient: HttpClient) { }

  signup(signupDetail: Signup) {
    return this.httpClient.post(`${this.hosturl}${API.SIGNUP}`, signupDetail);
  }
}
