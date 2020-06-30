import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/interface/movie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ongoingMovies: Movie[] = [{
    coverURL: 'https://m.media-amazon.com/images/M/MV5BMTc4NDkyODE3M15BMl5BanBnXkFtZTgwMTAwNDczMjE@._V1_.jpg',
    description: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
    duration: '',
    languageId: 'EN',
    name: 'Interstellar',
    releaseDate: '',
    statusId: '',
    theatres: [],
    trailerURL: ''
  }, {
    coverURL: 'https://m.media-amazon.com/images/M/MV5BMTY2NDg4NTI0Ml5BMl5BanBnXkFtZTgwODczNDQ1MDI@._V1_.jpg',
    description: 'A linguist is recruited by the military to communicate with alien lifeforms after twelve mysterious spacecrafts land around the world.',
    duration: '',
    languageId: '',
    name: 'Arrival',
    releaseDate: '',
    statusId: '',
    theatres: [],
    trailerURL: ''
  }];

  upcomingMovies: Movie[] = [{
    coverURL: 'https://m.media-amazon.com/images/M/MV5BNGEwMDU2ZDQtZmE5Zi00YjFiLWIwYWItOGMyMzY5MzljOWU3XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_UY268_CR1,0,182,268_AL__QL50.jpg',
    description: `James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.`,
    duration: '',
    languageId: 'EN',
    name: 'No Time to Die',
    releaseDate: '',
    statusId: '',
    theatres: [],
    trailerURL: ''
  }, {
    coverURL: 'https://m.media-amazon.com/images/M/MV5BNDhiZTE2NjUtMDlkNS00NGI5LWJkMjYtMjJhNzRhZmFkYTUxXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg',
    description: 'Armed with only one word -- Tenet -- and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
    duration: '',
    languageId: '',
    name: 'Tenet',
    releaseDate: '',
    statusId: '',
    theatres: [],
    trailerURL: ''
  }, {
    coverURL: 'https://m.media-amazon.com/images/M/MV5BNzM0OGZiZWItYmZiNC00NDgzLTg1MjMtYjM4MWZhOGZhMDUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL__QL50.jpg',
    description: 'A crew of oceanic researchers working for a deep sea drilling company try to get to safety after a mysterious earthquake devastates their deepwater research and drilling facility located at the bottom of the Mariana Trench.',
    duration: '',
    languageId: '',
    name: 'Underwater',
    releaseDate: '',
    statusId: '',
    theatres: [],
    trailerURL: ''
  }];
  constructor() {}

  ngOnInit(): void {}
}
