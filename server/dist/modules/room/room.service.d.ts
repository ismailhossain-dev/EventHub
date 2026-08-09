declare const getAllRooms: () => Promise<{
    id: string;
    image: string;
    title: string;
    roomNumber: string;
    location: string;
    category: string;
    description: string;
    number: number;
    price: number;
    capacity: number;
    bedType: string;
    size: string;
    amenities: string[];
    availability: boolean;
}[]>;
declare const getHomeRooms: () => Promise<{
    id: string;
    image: string;
    title: string;
    roomNumber: string;
    location: string;
    category: string;
    description: string;
    number: number;
    price: number;
    capacity: number;
    bedType: string;
    size: string;
    amenities: string[];
    availability: boolean;
}[]>;
declare const getDetailsRoom: (id: string) => Promise<{
    id: string;
    image: string;
    title: string;
    roomNumber: string;
    location: string;
    category: string;
    description: string;
    number: number;
    price: number;
    capacity: number;
    bedType: string;
    size: string;
    amenities: string[];
    availability: boolean;
} | null>;
export declare const roomService: {
    getAllRooms: typeof getAllRooms;
    getHomeRooms: typeof getHomeRooms;
    getDetailsRoom: typeof getDetailsRoom;
};
export {};
//# sourceMappingURL=room.service.d.ts.map