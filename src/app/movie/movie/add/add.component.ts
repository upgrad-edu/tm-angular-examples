import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Movie } from '../movie';
import { NgForm } from '@angular/forms';
import { AddService } from './add.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  movie = new Movie();
  addError: any;
  sub: Subscription;
  edit: boolean = false;
  actionLabel: string;
  constructor(
    private location: Location,
    private addService: AddService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      if (params && params.movieId) {
        this.edit = true;
        this.getMovie(params.movieId);
      } else {
        this.edit = false;
      }
    });
  }

  getMovie(movieId) {
    this.addService.getMovie(movieId).subscribe((res: Movie) => {
      console.log(res);
      this.movie = new Movie();
      this.mapFields(res);
    });
  }

  mapFields(movie: Movie) {
    this.movie.coverURL = movie.coverURL;
    this.movie.description = movie.description;
    this.movie.duration = movie.duration;
    this.movie.languageId = movie.languageId;
    this.movie.name = movie.name;
    this.movie.releaseDate = new Date(movie.releaseDate);
    this.movie.statusId = movie.statusId;
    this.movie.theatreIds = movie.theatreIds;
    this.movie.trailerURL = movie.trailerURL;
    this.movie.movieId = movie.movieId;
  }

  goBack() {
    this.location.back();
  }

  addUpdateMovie(movieForm: NgForm) {
    if (this.edit) {
      this.updateMovie(movieForm);
    } else {
      this.addMovie(movieForm);
    }
  }

  addMovie(addMovieForm: NgForm) {
    // console.log(addMovieForm.form);
    // console.log('Saved: ' + JSON.stringify(addMovieForm.value));
    // console.log(this.movie);
    this.addService.addMovie(this.movie).subscribe(
      (res) => this.router.navigate(['/home']),
      (err) =>
        (this.addError =
          err.error && err.error?.errorMessage
            ? err.error?.errorMessage
            : err.error?.error)
    );
  }

  updateMovie(movieForm) {
    console.log(movieForm.form);
    console.log('Saved: ' + JSON.stringify(movieForm.value));
    console.log(this.movie);
    this.addService.updateMovie(this.movie).subscribe(
      (res) => this.router.navigate(['/home']),
      (err) =>
        (this.addError =
          err.error && err.error?.errorMessage
            ? err.error?.errorMessage
            : err.error?.error)
    );
  }
}
