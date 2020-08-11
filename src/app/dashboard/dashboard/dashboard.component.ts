import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/interface/movie';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.dashboardService.movies().subscribe((res: Movie[]) => {
      this.movies = res;
      console.log('movie dat', res);
    });
  }

  edit(movie) {
    this.router.navigate([`/movie/edit/${movie.movieId}`]);
  }
}
