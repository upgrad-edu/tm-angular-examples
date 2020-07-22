import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
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
  safeTrailerUrl: SafeResourceUrl = null;
  movie: Movie = {
    coverURL:
      'https://m.media-amazon.com/images/M/MV5BMTc4NDkyODE3M15BMl5BanBnXkFtZTgwMTAwNDczMjE@._V1_.jpg',
    description: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
    duration: '169',
    languageId: 'EN',
    name: 'Interstellar',
    releaseDate: '2014-11-07',
    statusId: null,
    theatreId: [],
    trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    movieId: 13,
  };
  constructor(
    private domSanitizer: DomSanitizer,
    private router: Router,
    private detailsService: DetailsService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.safeTrailerUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.movie.trailerURL
    );
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => this.getMovieDetails(res.id));
  }

  goBack() {
    this.location.back();
  }

  getMovieDetails(movieId: number) {
    this.detailsService.movieDetails(movieId).subscribe((res: Movie) => {
      this.movie = this.formatData(res);
    });
  }

  formatData(movie: Movie) {
    const movieDetails = movie;

    movieDetails.releaseDate = new Date(movie.releaseDate).toISOString().split('T')[0];

    return movieDetails;
  }

  viewShows() {
    this.router.navigate([`movie/${this.movie.movieId}/shows`]);
  }
}
