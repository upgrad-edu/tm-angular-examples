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
  movieName: string = null;
  navLinks = [];
  customerNavLinks = [
    {
      label: 'My Bookings',
      route: 'customer',
    },
    {
      label: 'Logout',
      route: 'login',
    },
  ];
  adminNavLinks = [
    {
      label: 'Dashboard',
      route: 'dashboard',
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
      this.updateNavLinks();
    });

    if (!this.user) {
      this.user = this.authenticationService.getUser();
      this.updateNavLinks();
    }
  }

  searchMovie() {
    this.router.navigate([`/movie/search/${this.movieName}`]);
  }

  updateNavLinks() {
    if (this.user && this.user.userTypeId === 2) {
      this.navLinks = this.adminNavLinks;
    } else {
      this.navLinks = this.customerNavLinks;
    }
  }

  viewLink(link) {
    console.log(link);
    switch (link.route) {
      case 'login':
        this.authenticationService.logout();
        break;
      case 'dashboard':
        this.router.navigate(['/dashboard']);
        break;
      case 'customer':
        this.router.navigate(['/customer']);
        break;
      default:
        break;
    }
  }
}
