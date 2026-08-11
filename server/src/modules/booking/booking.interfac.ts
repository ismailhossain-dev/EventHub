export interface ICreateBooking {
  userId: string;
  roomId: string;

  roomTitle: string;
  roomImage: string;
  price: number;

  name: string;
  email: string;
  phone: string;
  address: string;
  message?: string;
}