
import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../generated/prisma/client.js";
import config from "../config/index.js";

//solve error
const adapter = new PrismaPg({
  connectionString: config.connnection_string,
});

export const prisma = new PrismaClient({
  adapter,
});
// database connect

export const initDB = async () => {
  try {
    await prisma.$connect();

    console.log("Database Connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
};