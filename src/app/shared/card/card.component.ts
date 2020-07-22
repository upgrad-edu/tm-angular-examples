import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  DoCheck,
} from '@angular/core';
import { Movie } from '../interface/movie';
import {Router} from "@angular/router";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  @Input('card') card: Movie;
  constructor(private router: Router) {}
  moreDetails() {
    this.router.navigate([`movie/${this.card.movieId}`])
  }
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

  viewShows() {
    this.router.navigate([`movie/${this.card.movieId}/shows`])
  }
}
