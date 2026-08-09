//just run server & database call
import app from "./app.js";
import config from "./config/index.js";
import { initDB } from "./db/prisma.js";
const main = async () => {
    try {
        await initDB();
        app.listen(config.port, () => {
            console.log(`EventHub server running on port ${config.port}`);
        });
    }
    catch (error) {
        console.log("Failed to start server", error);
    }
};
main();
//# sourceMappingURL=server.js.map