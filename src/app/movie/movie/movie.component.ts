import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/interface/movie';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
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
  constructor(
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {
    this.route.params.subscribe((params) => console.log(params));
    this.safeTrailerUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerURL);
  }

  ngOnInit(): void {}
}
