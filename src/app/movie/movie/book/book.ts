export interface BookingRequest {
    bookingDate: string;
    noOfSeats: number;
    customerId: string;
    theatreId: string;
    name?: string;
}