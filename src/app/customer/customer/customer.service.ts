import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { API } from '../../shared/service/api';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  hosturl = environment.hosturl;
  constructor(private httpClient: HttpClient) { }

  getBookings(customerId: number) {
    return this.httpClient.get(`${this.hosturl}${API.CUSTOMERS}/${customerId}/${API.BOOK}`);
  }
}
