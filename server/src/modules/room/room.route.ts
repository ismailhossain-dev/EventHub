//step-3 get room
import { Router } from "express";
import { roomController } from "./room.controller.js";


const router = Router();

router.get("/", roomController.getAllRooms);

export const useRoomRoutes = router

//get home rooms

const route = Router();

route.get("/", roomController.getHomeRooms);

export const roomsHomeRoutes = route


//get details room
const rotue = Router();

router.get("/:id", roomController.getDetailsRoom);

export const detailsRoutes = rotue; 
