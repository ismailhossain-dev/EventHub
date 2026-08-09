//setup env
import dotenv from "dotenv"
import path from "node:path"
dotenv.config({
    path: path.join(process.cwd(), ".env") //ekane root env file set korchi

});

const config = {
    connnection_string: process.env.CONNECTIIONSTRING as string,
    port: process.env.PORT
}

export default config;