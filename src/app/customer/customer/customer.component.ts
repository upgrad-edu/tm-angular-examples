import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { CustomerService } from './customer.service';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Booking } from './booking';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  sub: Subscription;
  bookings: Booking[] = null;
  constructor(
    private location: Location,
    private customerService: CustomerService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    const customerId = this.authenticationService.getUser().customerId;
    this.customerService
      .getBookings(customerId)
      .subscribe((res: Booking[]) => (this.bookings = res));
  }
  goBack() {
    this.location.back();
  }
}
