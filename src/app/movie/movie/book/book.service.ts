import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { API } from '../../../shared/service/api';
import { BookingRequest } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  hosturl = environment.hosturl;
  constructor(private httpClient: HttpClient) { }

  bookMovie(bookingRequest: BookingRequest) {
    return this.httpClient.post(`${this.hosturl}${API.BOOK}`, bookingRequest);
  }
}
