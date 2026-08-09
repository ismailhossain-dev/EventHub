import { prisma } from "../../db/prisma";


interface Iuser {
    name: string,
    email: string,
    password: string
}
const createUser = async (payload:Iuser) => {
console.log("user post data user.service.ts file", payload)

  const user = await prisma.user.create({
    data: payload,
  });

  return user;
};

export const userService = {
  createUser,
};