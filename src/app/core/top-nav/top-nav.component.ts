import { Component, OnInit } from '@angular/core';
import { LoginService } from '../components/login/login.service';
import { Subscription } from 'rxjs';
import { User } from '../components/login/login';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  navLinks = [
    {
      label: 'Profile',
      route: 'profile',
    },
    {
      label: 'My Bookings',
      route: 'bookings',
    },
    {
      label: 'Logout',
      route: 'login',
    },
  ];
  userSub: Subscription;
  user: User = null;
  constructor(
    private loginService: LoginService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSub = this.loginService.user.subscribe((user) => {
      this.user = user;
    });

    if (!this.user) {
      this.user = this.authenticationService.getUser();
    }
  }

  viewLink(link) {
    console.log(link);
    switch (link.route) {
      case 'login':
        this.authenticationService.logout();
        this.router.navigate(['login']);
        break;

      default:
        break;
    }
  }
}
