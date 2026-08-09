
import { PrismaPg } from "@prisma/adapter-pg";
import config from "../config";
import { PrismaClient } from "../../generated/prisma/client";
//solve error
const adapter = new PrismaPg({
  connectionString: config.connnection_string,
});

export const prisma = new PrismaClient({
  adapter,
});
// 

export const initDB = async () => {
  try {
    await prisma.$connect();

    console.log("Database Connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
};