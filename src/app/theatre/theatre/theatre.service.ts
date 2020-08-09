import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
    HttpClient,
} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class TheatreService {

    constructor(private httpClient: HttpClient) { }

    addTheatre(theatre: any) {
        return this.httpClient.post('http://localhost:7070/movie_app/v1/theatres', theatre)
            .pipe(map(response => {
                console.log('response', response);
                return response;
            }));
    }
}
