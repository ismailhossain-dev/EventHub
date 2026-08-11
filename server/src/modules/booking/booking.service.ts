import { prisma } from "../../db/prisma.js";
import type { ICreateBooking } from "./booking.interfac.js";

//post route 
const createBookingIntoDB = async (data: ICreateBooking) => {
  const result = await prisma.booking.create({
    data: {
      userId: data.userId,
      roomId: data.roomId,

      roomTitle: data.roomTitle,
      roomImage: data.roomImage,
      price: Number(data.price),

      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      message: data.message || null,

      status: "PENDING",
    },
  });

  return result;
};



// Get bookings by user
const getBookingsByEmail = async (email: string) => {
    console.log("hello email", email);
    const bookings = await prisma.booking.findMany({
    where: {
      email: email,
    },
  });

  return bookings;
};

export const bookingService = {
  createBookingIntoDB,
  getBookingsByEmail
};