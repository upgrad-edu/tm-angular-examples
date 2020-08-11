import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { Movie } from '../interface/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() card: Movie;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  moreDetails() {
    this.router.navigate([`movie/${this.card.movieId}`]);
  }

  viewShows() {
    this.router.navigate([`movie/${this.card.movieId}/shows`]);
  }
}
