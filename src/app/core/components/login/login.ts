export class Login {
  username: string;
  password: string;

  constructor(username = '', password = '') {
    this.username = username;
    this.password = password;
  }
}

export interface LoginResponseData {
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
