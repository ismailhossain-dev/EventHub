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

export const roomController = {
  getAllRooms,
};