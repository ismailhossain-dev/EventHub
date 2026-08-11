import { Router } from "express";
import { bookingController } from "./booking.controller.js";

const router = Router();

router.post("/", bookingController.createBooking);

export const bookingRouter = router;