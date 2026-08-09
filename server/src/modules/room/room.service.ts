import { prisma } from "../../db/prisma.js";

//step-1 get room
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


// get home rooms

const getHomeRooms = async () => {
  const rooms = await prisma.room.findMany({
    take: 3,
  });

  return rooms;
};

// get details room 

const getDetailsRoom = async (id: string) => {
  const room = await prisma.room.findUnique({
    where: {
      id: id,
    },
  });

  return room;
};

export const roomService = {
  getAllRooms,
  getHomeRooms,
  getDetailsRoom
};
