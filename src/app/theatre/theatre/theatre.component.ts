import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { Location } from '@angular/common';
import { Theatre } from './theatre';
import { TheatreService } from './theatre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.scss'],
})
export class TheatreComponent implements OnInit {
  theatreForm: FormGroup;
  theatre = new Theatre();

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private theatreService: TheatreService,
    private router: Router) { }
  goBack() {
    this.location.back();
  }
  ngOnInit(): void {
    this.theatreForm = this.fb.group({
      theatreName: ['', [Validators.required, Validators.minLength(3)]],
      noOfSeats: [{ value: 1, disabled: false }, seatsValidator(1, 200)],
      ticketPrice: null,
      cityId: '',
      movieId: '',
      bookings: [],
    });

    // this.theatreForm = new FormGroup({
    //   theatreName: new FormControl(),
    //   noOfSeats: new FormControl(),
    //   ticketPrice: new FormControl(),
    //   cityId: new FormControl(),
    //   movieId: new FormControl(),
    //   bookings: new FormControl(),
    // });
  }

  addTheatre() {
    console.log(this.theatreForm);
    console.log('Saved: ' + JSON.stringify(this.theatreForm.value));

    this.theatreService.addTheatre(this.theatreForm.value).pipe().subscribe(
      (res: any) => {
        console.log('res', res);
        this.router.navigate(['/login']);
      });
  }

  updateValidator() {
    const movieIdControl = this.theatreForm.get('movieId');
    const bookingsControlValue = this.theatreForm.get('bookings').value;
    if (bookingsControlValue.length) {
      movieIdControl.setValidators(Validators.required);
    } else {
      movieIdControl.clearValidators();
    }

    movieIdControl.updateValueAndValidity();
  }
}

function seatsValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (
      control.value !== null &&
      (isNaN(control.value) || control.value < min || control.value > max)
    ) {
      return { range: true };
    }
    return null;
  };
}
