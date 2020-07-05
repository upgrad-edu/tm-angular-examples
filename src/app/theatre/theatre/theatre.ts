export class Theatre {
  theatreName: string;
  noOfSeats: number;
  ticketPrice: number;
  cityId: string;
  movieId: string;
  bookings: string[];
  id?: number;

  constructor(
    theatreName: string = '',
    noOfSeats: number = null,
    ticketPrice: number = null,
    cityId: string = '',
    movieId: string = '',
    bookings: string[] = []
  ) {
    this.theatreName = theatreName;
    this.noOfSeats = noOfSeats;
    this.ticketPrice = ticketPrice;
    this.cityId = cityId;
    this.movieId = movieId;
    this.bookings = bookings;
  }
}
