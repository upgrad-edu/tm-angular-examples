import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../components/login/login';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  localStorageKey: string = 'jwtToken';
  constructor(private router: Router) { }

  setToken(jwtToken): void {
    localStorage.setItem(this.localStorageKey, jwtToken);
  }

  getToken(): string {
    return localStorage.getItem(this.localStorageKey);
  }

  setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
