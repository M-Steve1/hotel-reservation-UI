export default interface Reservation {
    id: object,
    email: string;
    roomNumber: string;
    checkInDate: string;
    checkOutDate: string;
    numberOfAdults: number;
    numberOfChildren: number;
}