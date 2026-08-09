//step-1 get room
import { prisma } from "../../db/prisma.js"
const getAllRooms = async () => {
  const rooms = await prisma.room.findMany({
    where: {
      isDeleted: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return rooms;
};

export const roomService = {
  getAllRooms,
};