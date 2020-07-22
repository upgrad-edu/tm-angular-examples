import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class SignupComponent implements OnInit, OnDestroy {
  signup = new Signup();
  signupError: HttpErrorResponse = null;
  routeSubs: any;
  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.routeSubs) {
      this.routeSubs.unsubscribe();
    }
  }

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
      (err) => {
        console.log(err);
        this.signupError =
          err.error && err.error.errorMessage
            ? err.error.errorMessage
            : err.error.error;
      }
    );
  }

  formatRequest() {
    this.signup.userTypeId = this.router.url.indexOf('admin') > -1 ? '2' : '1'; //customer and 2 for Admin
  }
}
