import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Movie } from '../movie';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  movie = new Movie();
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  goBack() {
    this.location.back();
  }

  addMovie(addMovieForm: NgForm) {
    console.log(addMovieForm.form);
    console.log('Saved: ' + JSON.stringify(addMovieForm.value));
    console.log(this.movie)
  }
}
