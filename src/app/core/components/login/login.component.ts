import { Component, OnInit } from '@angular/core';
import { Login, LoginResponseData } from './login';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = new Login();
  constructor(private loginService: LoginService, private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {}

  loginUser(loginForm: NgForm) {
    console.log(loginForm.form);
    console.log('Saved: ' + JSON.stringify(loginForm.value));
    console.log(this.login);
    this.loginService.login(this.login).subscribe((res: LoginResponseData) => {
      console.log(res);
      this.authenticationService.setToken(res.jwtToken);
      this.router.navigate(['/home']);
    });
  }
}
