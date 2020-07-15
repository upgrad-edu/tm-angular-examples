import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  navLinks = [
    {
      label: 'Profile',
      route: 'profile'
    }, {
      label: 'My Bookings',
      route: 'bookings'
    }, {
      label: 'Logout',
      route: 'login'
    }
  ];
  constructor() { }

  ngOnInit(): void { }
  
  viewLink(link) {
    console.log(link)
  }
}
