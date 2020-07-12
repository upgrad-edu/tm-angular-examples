import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  movies() {
    return this.httpClient.get('http://localhost:7070/movie_app/v1/movies/')
  }
}
