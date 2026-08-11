export interface Room {
  id: string;
  image: string;
  title: string;
  roomNumber: string;
  location: string;
  category: string;
  description: string;
  number: string;
  price: string;
  capacity: string;
  bedType: string;
  size: string;
  amenities: string[];
  availability: boolean;
  phone: string;
  isDeleted: boolean;
  createdAt: string;
}

export interface Booking {
  id: string;
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
  status: string;
  createdAt: string;
  updatedAt: string;
}