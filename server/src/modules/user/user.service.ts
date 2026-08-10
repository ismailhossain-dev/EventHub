import { prisma } from "../../db/prisma.js";
import bcrypt from "bcryptjs";
interface Iuser {
    name: string,
    email: string,
    password: string
}

//post user
const createUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  // Check existing user
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // Create user
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: "USER",
    },
  });

  // Don't return password
  const { password: _, ...userData } = user;

  return userData;
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

//Get user in email 

const getUserByEmail = async(email: string) => {
 const user = await prisma.user.findUnique({
  where: {
    email
  }
 });
 return user
}


export const userService = {
  createUser,
  deleteUser,
  getUserByEmail
};

