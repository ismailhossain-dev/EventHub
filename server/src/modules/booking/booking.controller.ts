import type { Request, Response } from "express";
import { bookingService } from "./booking.service.js";

const createBooking = async (req: Request, res: Response) => {
  try {
    const result = await bookingService.createBookingIntoDB(req.body);

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: result,
    });
  } catch (error: any) {
    console.error("Create booking error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to create booking",
      error: error,
    });
  }
};

export const bookingController = {
  createBooking,
};