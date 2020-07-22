//This is solely for representation purpose of real scenario
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, tap, map } from 'rxjs/operators';
@Injectable()
export class ApiService {
  private baseUrl = environment.hosturl;

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.request(url, 'GET');
  }

  post(url: string, body: Object) {
    return this.request(url, 'POST', body);
  }

  put(url: string, body: Object) {
    return this.request(url, 'PUT', body);
  }

  delete(url: string) {
    return this.request(url, 'DELETE');
  }

  request(url: string, method: string, body?: Object) {
    const headers = new HttpHeaders();
    
    const request = new HttpRequest(
      method = method, url = url, body 
    );

    return this.http
      .request(request)
      .pipe(
        map((res) => console.log(res))
      )
  }

  onRequestError(res) {
    const statusCode = res.status;
    const body = res.json();

    const error = {
      statusCode: statusCode,
      error: body.error,
    };

    console.log(error);

    return Observable.throw(error);
  }
}
