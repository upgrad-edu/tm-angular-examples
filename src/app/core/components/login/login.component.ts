import { Component, OnInit } from '@angular/core';
import { Login, User } from './login';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = new Login();
  loginError: string = null;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const user = new User();
    this.loginService.user.next(user);
  }

  loginUser(loginForm: NgForm) {
    console.log(loginForm.form);
    console.log('Saved: ' + JSON.stringify(loginForm.value));
    console.log(this.login);
    this.loginError = null;
    this.loginService
      .login(this.login)
      .subscribe((res: User) => this.loginSuccess(res), err => this.loginError = err);
  }

  loginSuccess(response: User) {
    this.router.navigate(['/home']);
  }
}
