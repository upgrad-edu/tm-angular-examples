import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Movie } from '../movie';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  movie = new Movie();
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
