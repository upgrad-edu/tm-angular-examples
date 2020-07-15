import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomHeaderService } from '../../core/services/custom-header.service';
@Injectable()
export class HomeService {
  constructor(private httpClient: HttpClient, private customHeaderService: CustomHeaderService) {}

  movies() {
    const options = this.customHeaderService.
    getHttpClientOptions();
    console.log(options
      )
    return this.httpClient.get('http://localhost:7070/movie_app/v1/movies/', options);
  }
}
