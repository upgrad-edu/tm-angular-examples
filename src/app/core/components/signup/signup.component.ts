import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { Signup, SignupResponseData } from './signup';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signup = new Signup();
  signupError: HttpErrorResponse = null;
  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit(): void {}

  signupUser(signupForm: NgForm): void {
    console.log(signupForm.form);
    console.log('Saved: ' + JSON.stringify(signupForm.value));
    console.log(this.signup);
    this.formatRequest();
    this.signupService.signup(this.signup).subscribe(
      (res: SignupResponseData) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      (err: HttpErrorResponse) => (this.signupError = err.error.error)
    );
  }

  formatRequest() {
    this.signup.userTypeId = '6';//customer
  }
}
