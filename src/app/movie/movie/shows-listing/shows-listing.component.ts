import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ShowsListingService } from './shows-listing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-shows-listing',
  templateUrl: './shows-listing.component.html',
  styleUrls: ['./shows-listing.component.scss'],
  providers: [DatePipe]
})
export class ShowsListingComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  movie: Movie = null;
  noOfSeats: number = 1;
  bookingDate: any = null;
  constructor(
    private location: Location,
    private showsListingService: ShowsListingService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.showsListingService
        .getMovie(params.movieId)
        .subscribe((res: Movie) => {
          this.movie = res;
        });
    });
  }

  goBack() {
    this.location.back();
  }

  book(theaterId: number) {
    this.bookingDate = this.datePipe.transform(this.bookingDate, 'yyyy-MM-dd');
    this.router.navigate(['/movie/book'], {
      queryParams: {
        customerId: this.authenticationService.getUser().customerId,
        movieId: this.movie.movieId,
        name: this.movie.name,
        theatreId: theaterId,
        noOfSeats: this.noOfSeats,
        bookingDate: this.bookingDate
      },
    });
  }
}
