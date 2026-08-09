//ekane amra database setup divo
import { Pool } from "pg";
import config from "../config";
import { PrismaClient } from "@prisma/client/extension";

export const pool = new Pool({
    connectionString: config.connnection_string
});


export const initDB = async ()=> {
    //ekane database table kora hobe like await pool.query

    console.log("Database Connected successfully");
}

// Prisma client create========
export const prisma = new PrismaClient()

