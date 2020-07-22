import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { API } from '../../../shared/service/api';
import { Movie } from '../movie';
@Injectable({
  providedIn: 'root'
})
export class AddService {
  hosturl = environment.hosturl;
  constructor(private httpClient: HttpClient) {}

  addMovie(movie: Movie) {
    return this.httpClient.post(`${this.hosturl}${API.MOVIE}/`, movie);
  }

  getMovie(movieId: string) {
    return this.httpClient.get(`${this.hosturl}${API.MOVIE}/${movieId}`);
  }

  updateMovie(movie: Movie) {
    const movieRequest = JSON.parse(JSON.stringify(movie));
    delete movieRequest['movieId'];
    return this.httpClient.put(`${this.hosturl}${API.MOVIE}/${movie.movieId}`, movieRequest);
  }
}
