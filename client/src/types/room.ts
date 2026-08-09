export interface Room {
    id: string, 
    image: string, 
    title: string, 
    roomNumber: string,
    location: string,
    category: string,
    description: string ,
    number: string, 
    price: string,
    capacity: string, 
    bedType: string, 
    size: string, 
    amenities: string[];
    availability: boolean;
    phone: string, 
    isDeleted: boolean,
    createdAt: string
}

export interface RoomResponse {
    success: boolean;
    message: string,
    data: Room[]
}