//ekane amra database setup divo
import { Pool } from "pg";
import config from "../config";

export const pool = new Pool({
    connectionString: config.connnection_string
});


export const initDB = async ()=> {
    //ekane database table kora hobe like await pool.query

    console.log("Database Connected successfully");
}

