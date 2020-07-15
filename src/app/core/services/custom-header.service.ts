import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
@Injectable({providedIn: 'root'})
export class CustomHeaderService {
    constructor(private authenticationService: AuthenticationService) { }
    
    getHttpClientOptions() {
        const headers: HttpHeaders = new HttpHeaders();
        headers.set('X-Access-Token', `${this.authenticationService.getToken()}`)
        const options = { headers: headers };        
        return options;
    }
}