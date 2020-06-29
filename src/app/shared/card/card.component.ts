import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  DoCheck,
} from '@angular/core';
import { Card } from './card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  card: Card = {
    coverURL: 'https://m.media-amazon.com/images/M/MV5BMTc4NDkyODE3M15BMl5BanBnXkFtZTgwMTAwNDczMjE@._V1_.jpg',
    description: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
    duration: null,
    languageId: null,
    name: 'Interstellar',
    releaseDate: null,
    statusId: null,
    theatres: null,
    trailerURL: null
  };
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.card}`);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
