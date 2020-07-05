import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Theatre } from './theatre';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.scss'],
})
export class TheatreComponent implements OnInit {
  theatreForm: FormGroup;
  theatre = new Theatre();

  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
  ngOnInit(): void {
    this.theatreForm = new FormGroup({
      theatreName: new FormControl(),
      noOfSeats: new FormControl(),
      ticketPrice: new FormControl(),
      cityId: new FormControl(),
      movieId: new FormControl(),
      bookings: new FormControl(),
    });
  }

  addTheatre() {
    console.log(this.theatreForm);
    console.log('Saved: ' + JSON.stringify(this.theatreForm.value));
  }
}
