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

export const bookingService = {
  createBookingIntoDB,
};