//setup env
import dotenv from "dotenv";
import path from "node:path";
dotenv.config({
    path: path.join(process.cwd(), ".env") //ekane root env file set korchi
});
const config = {
    connnection_string: process.env.DATABASE_URL,
    port: process.env.PORT
};
export default config;
//# sourceMappingURL=index.js.map