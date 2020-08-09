import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { BookingRequest } from './book';
import { BookService } from './book.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {
  bookingRequest: BookingRequest = null;
  sub: Subscription;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe((params: BookingRequest) => {
      const receivedParams = JSON.parse(JSON.stringify(params));
      receivedParams.bookingDate = receivedParams.bookingDate
        .replace('T', ' ')
        .substring(0, 19);
      this.bookingRequest = receivedParams;
      console.log(this.bookingRequest);
    });
  }

  bookMovie() {
    const bookingRequest = JSON.parse(JSON.stringify(this.bookingRequest));
    delete bookingRequest['name'];
    console.log('bookingRequest', bookingRequest);
    this.bookService.bookMovie(bookingRequest).pipe().subscribe((res) => {
      this.toastr.success('Confirmed!', 'Movie successfully booked.');
      this.router.navigate(['home']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    this.location.back();
  }
}
