import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ShowsListingService } from './shows-listing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../movie';
import { AuthenticationService } from '../../../core/services/authentication.service';
@Component({
  selector: 'app-shows-listing',
  templateUrl: './shows-listing.component.html',
  styleUrls: ['./shows-listing.component.scss'],
})
export class ShowsListingComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  sub: Subscription;
  movie: Movie = null;
  noOfSeats: number = 1;
  bookingDate: any = null;
  constructor(
    private location: Location,
    private showsListingService: ShowsListingService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.showsListingService
        .getMovie(params.movieId)
        .subscribe((res: Movie) => {
          console.log(res);
          this.movie = res;
          console.log(this.movie);
        });
    });
  }

  goBack() {
    this.location.back();
  }

  book() {
    this.router.navigate(['/movie/book'], {
      queryParams: {
        customerId: this.authenticationService.getUser().customerId,
        name: this.movie.name,
        theatreId: this.movie.theatreIds[0],
        noOfSeats: this.noOfSeats,
        bookingDate: this.bookingDate ? this.bookingDate.toISOString() : null
      },
    });
  }
}
