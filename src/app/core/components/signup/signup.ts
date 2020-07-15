export class Signup {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  dateOfBirth: string;
  phoneNumbers: string[];
  userTypeId: string;
  bookings: [];

  constructor(
    firstName: string = '',
    lastName: string = '',
    username: string = '',
    password: string = '',
    dateOfBirth: string = '',
    phoneNumbers: string[] = [],
    userTypeId: string = '',
    bookings: [] = []
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.phoneNumbers = phoneNumbers;
    this.userTypeId = userTypeId;
    this.bookings = bookings;
  }
}

export interface SignupResponseData {
  bookings: string[];
  customerId: number;
  dateOfBirth: number;
  firstName: string;
  jwtToken: string;
  lastName: string;
  password: string;
  phoneNumbers: string[];
  refreshToken: string;
  userTypeId: number;
  username: string;
}
