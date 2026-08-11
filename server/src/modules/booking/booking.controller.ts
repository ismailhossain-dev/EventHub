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
// get booking data
const getBookingsByEmail = async (
  req: Request<{ email: string }>,
  res: Response
) => {
  try {
    const { email } = req.params;
      console.log("🔍 Searching booking by email:", email);

    const bookings =
      await bookingService.getBookingsByEmail(email);

    return res.status(200).json({
      success: true,
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    console.error("Get bookings error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error:
        error instanceof Error
          ? error.message
          : "Unknown error",
    });
  }
};

export const bookingController = {
  createBooking,
  getBookingsByEmail
};