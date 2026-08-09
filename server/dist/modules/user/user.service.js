import { prisma } from "../../db/prisma.js";
const createUser = async (payload) => {
    console.log("user post data user.service.ts file", payload); //success
    const user = await prisma.user.create({
        data: payload,
    });
    return user;
};
//Delete user
const deleteUser = async (email) => {
    const user = await prisma.user.delete({
        where: {
            email,
        },
    });
    return user;
};
//Get user in email 
const getUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    return user;
};
export const userService = {
    createUser,
    deleteUser,
    getUserByEmail
};
//# sourceMappingURL=user.service.js.map