//step-1 get room
import { prisma } from "../../db/prisma.js";
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
        //ekane bole divo room koita lagbe
        take: 6,
    });
    return rooms;
};
// get details room 
const getDetailsRoom = async (id) => {
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
//# sourceMappingURL=room.service.js.map