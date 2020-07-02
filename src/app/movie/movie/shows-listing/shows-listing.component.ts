import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-shows-listing',
  templateUrl: './shows-listing.component.html',
  styleUrls: ['./shows-listing.component.scss'],
})
export class ShowsListingComponent implements OnInit {
  numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  shows = [
    {
      id: 13,
      name: 'Interstellar',
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      releaseDate: '2014-11-07T00:00:00.000+00:00',
      duration: 169,
      coverPhotoURL:
        'https://m.media-amazon.com/images/M/MV5BMTc4NDkyODE3M15BMl5BanBnXkFtZTgwMTAwNDczMjE@._V1_.jpg',
      trailerURL:
        'https://www.youtube.com/embed/zSWdZVtXT7E',
      theatres: [
        {
          id: 14,
          theatreName: 'Jubliee Plex 2',
          noOfSeats: 125,
          ticketPrice: 125,
          bookings: [],
        },
      ],
    },
    {
      id: 13,
      name: 'Interstellar',
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      releaseDate: '2014-11-07T00:00:00.000+00:00',
      duration: 169,
      coverPhotoURL:
        'https://m.media-amazon.com/images/M/MV5BMTc4NDkyODE3M15BMl5BanBnXkFtZTgwMTAwNDczMjE@._V1_.jpg',
      trailerURL:
        'https://www.youtube.com/embed/zSWdZVtXT7E',
      theatres: [
        {
          id: 14,
          theatreName: 'Jubliee Plex 2',
          noOfSeats: 125,
          ticketPrice: 125,
          bookings: [],
        },
      ],
    },
  ];
  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }
}
