import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/interface/movie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // movies: Movie[] = [{
  //   coverURL: 'https://m.media-amazon.com/images/M/MV5BMTc4NDkyODE3M15BMl5BanBnXkFtZTgwMTAwNDczMjE@._V1_.jpg',
  //   description: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
  //   duration: '',
  //   languageId: 'EN',
  //   name: 'Interstellar',
  //   releaseDate: '',
  //   statusId: '',
  //   theatres: [],
  //   trailerURL: ''
  // }, {
  //   coverURL: 'https://m.media-amazon.com/images/M/MV5BMTY2NDg4NTI0Ml5BMl5BanBnXkFtZTgwODczNDQ1MDI@._V1_.jpg',
  //   description: 'A linguist is recruited by the military to communicate with alien lifeforms after twelve mysterious spacecrafts land around the world.',
  //   duration: '',
  //   languageId: '',
  //   name: 'Arrival',
  //   releaseDate: '',
  //   statusId: '',
  //   theatres: [],
  //   trailerURL: ''
  // }];
  constructor() {}

  ngOnInit(): void {}
}
