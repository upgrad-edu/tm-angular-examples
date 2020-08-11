import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'src/app/shared/interface/movie';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  movie: Movie;

  constructor(
    private domSanitizer: DomSanitizer,
    private router: Router,
    private detailsService: DetailsService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (res) =>
        this.getMovieDetails(res.id)
    );
  }

  goBack() {
    this.location.back();
  }

  getMovieDetails(movieId: number) {
    this.detailsService.movieDetails(movieId)
      .subscribe(
        (res: Movie) => {
          this.movie = res;
          this.movie.trailerURL = this.domSanitizer.bypassSecurityTrustResourceUrl(res.trailerURL);
        });
  }

  viewShows() {
    this.router.navigate([`movie/${this.movie.movieId}/shows`]);
  }
}
