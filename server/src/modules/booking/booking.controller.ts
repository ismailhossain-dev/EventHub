import type { Request, Response } from "express";
import { prisma } from "../../db/prisma.js";
const createBooking = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      userId,
      roomId,
      roomTitle,
      roomImage,
      price,
      checkIn,
      checkOut,
      guest,
      name,
      email,
      phone,
      address,
      message,
      totalPrice,
    } = req.body;

    // Validation
    if (
      !userId ||
      !roomId ||
      !roomTitle ||
      !roomImage ||
      !price ||
      !checkIn ||
      !checkOut ||
      !guest ||
      !name ||
      !email ||
      !phone ||
      !address ||
      !totalPrice
    ) {
      return res.status(400).json({
        success: false,
        message: "Required booking information is missing",
      });
    }

    const booking = await prisma.booking.create({
      data: {
        userId,
        roomId,
        roomTitle,
        roomImage,
        price: Number(price),

        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        guest: Number(guest),

        name,
        email,
        phone,
        address,
        message: message || null,

        totalPrice: Number(totalPrice),

        status: "PENDING",
      },
    });

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
  console.error("Create booking error:", error);

  return res.status(500).json({
    success: false,
    message: "Failed to create booking",
    error: error instanceof Error ? error.message : error,
  });
  }
};

export const bookingController = {
  createBooking,
};