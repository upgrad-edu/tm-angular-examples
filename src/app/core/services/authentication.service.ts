import { Injectable } from '@angular/core';
import { Customer } from '../../shared/interface/customer';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  customer: Customer = null;
  localStorageKey: string = 'jwtToken';
  constructor(private router: Router) {}

  setToken(jwtToken): void {
    localStorage.setItem(this.localStorageKey, jwtToken);
  }

  getToken(): string {
    return localStorage.getItem(this.localStorageKey);
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.remove(this.localStorageKey);
    this.router.navigate(['login']);
  }
}
