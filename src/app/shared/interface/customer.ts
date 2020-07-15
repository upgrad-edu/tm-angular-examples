export interface Customer {
  customerId: number;
  firstName: string;
  lastName: string;
  dateOfBirth: number;
  username: string;
  password: string;
  userTypeId: number;
  jwtToken: string;
  refreshToken: string;
  phoneNumbers: number[];
  bookings: number[];
}
