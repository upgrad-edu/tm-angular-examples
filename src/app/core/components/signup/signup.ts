export class Signup {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  dateOfBirth: string;
  phoneNumbers: string[];
  userTypeId: string;
  bookingIds: [];

  constructor(
    firstName: string = '',
    lastName: string = '',
    username: string = '',
    password: string = '',
    dateOfBirth: string = '',
    phoneNumbers: string[] = [],
    userTypeId: string = '',
    bookingIds: [] = []
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.phoneNumbers = phoneNumbers;
    this.userTypeId = userTypeId;
    this.bookingIds = bookingIds;
  }
}

export interface SignupResponseData {
  bookingIds: string[];
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
