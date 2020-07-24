import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/interface/movie';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ongoingMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.movies().subscribe((res: Movie[]) => {
      this.ongoingMovies = res.filter(movie => movie.statusId === 2); // Is this readable?
      this.upcomingMovies = res.filter(movie => movie.statusId === 1); // How can it be improved from reability perspective? Say, someone joins the team tomorrow, how would the new joinee know what does statusId imply here, without prior knowledge of the same?
    });
  }
}
