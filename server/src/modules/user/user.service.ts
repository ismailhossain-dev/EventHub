import { prisma } from "../../db/prisma.js";

interface Iuser {
    name: string,
    email: string,
    password: string
}

const createUser = async (payload:Iuser) => {
console.log("user post data user.service.ts file", payload)//success

  const user = await prisma.user.create({
    data: payload,
  });

  return user;
};

//Delete user
const deleteUser = async (email: string) => {
  const user = await prisma.user.delete({
    where: {
      email,
    },
  });

  return user;
};
export const userService = {
  createUser,
  deleteUser
};