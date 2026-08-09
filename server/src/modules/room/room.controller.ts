//step-2 get room request response handle
import type { Request, Response } from "express";
import { roomService } from "./room.service.js";

const getAllRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await roomService.getAllRooms();

    res.status(200).json({
      success: true,
      message: "Rooms retrieved successfully",
      data: rooms,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to retrieve rooms",
      error,
    });
  }
};

// get home products 

const getHomeRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await roomService.getHomeRooms();

    res.status(200).json({
      success: true,
      message: "Three rooms retrieved successfully",
      data: rooms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get rooms",
    });
  }
};

//get details room 
const getDetailsRoom = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid room ID",
      });
    }

    const room = await roomService.getDetailsRoom(id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Room details retrieved successfully",
      data: room,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to get room details",
    });
  }
};


export const roomController = {
  getAllRooms,
  getHomeRooms,
  getDetailsRoom
};