import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Movie } from 'src/app/shared/interface/movie';
import {Router} from "@angular/router";
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
    statusId: '',
    theatres: [],
    trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    id: 13,
  };
  constructor(private domSanitizer: DomSanitizer, private router: Router) {
    this.safeTrailerUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.movie.trailerURL
    );
  }

  ngOnInit(): void {}

  viewShows() {
    this.router.navigate([`movie/${this.movie.id}/shows`])
  }
}
