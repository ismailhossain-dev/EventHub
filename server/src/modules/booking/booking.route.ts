import { Router } from "express";
import { bookingController } from "./booking.controller.js";

const router = Router();

router.post("/", bookingController.createBooking);

export const bookingRoutes = router;

router.get(
  "/email/:email",
  bookingController.getBookingsByEmail
);

export const getBookingRoutes = router;