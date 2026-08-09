//step-3 get room
import { Router } from "express";
import { roomController } from "./room.controller.js";


const router = Router();

router.get("/", roomController.getAllRooms);

export const useRoomRoutes = router