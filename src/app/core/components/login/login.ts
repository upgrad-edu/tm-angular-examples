export class Login {
  username: string;
  password: string;

  constructor(username = '', password = '') {
    this.username = username;
    this.password = password;
  }
}

export class User {
  bookings?: string[];
  customerId?: number;
  dateOfBirth?: number;
  firstName: string;
  jwtToken: string;
  lastName: string;
  password?: string;
  phoneNumbers?: string[];
  refreshToken?: string;
  userTypeId?: number;
  username?: string;

  constructor(
    user: User = {
      firstName: null,
      lastName: null,
      jwtToken: null,
      bookings: [],
      customerId: null,
      dateOfBirth: null,
      password: null,
      phoneNumbers: [],
      refreshToken: null,
      userTypeId: null,
      username: null
    }
  ) {
    this.bookings = user.bookings || null;
    this.customerId = user.customerId || null;
    this.dateOfBirth = user.dateOfBirth || null;
    this.firstName = user.firstName || null;
    this.jwtToken = user.jwtToken || null;
    this.lastName = user.lastName || null;
    this.password = user.password || null;
    this.phoneNumbers = user.phoneNumbers || null;
    this.refreshToken = user.refreshToken || null;
    this.userTypeId = user.userTypeId || null;
    this.username = user.username || null;
  }
}
