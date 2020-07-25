import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { API } from '../../../shared/service/api';

@Injectable({
  providedIn: 'root'
})
export class ShowsListingService {
  hosturl = environment.hosturl;
  constructor(private httpClient: HttpClient) {}

  getMovie(movieId: string) {
    return this.httpClient.get(`${this.hosturl}${API.MOVIE}/${movieId}`);
  }
}
