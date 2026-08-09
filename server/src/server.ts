//just run server & database call

import app from "./app";
import config from "./config";
import { initDB } from "./db/prisma";


const main = async () => {
  try {
    await initDB();

    app.listen(config.port, () => {
      console.log(`EventHub server running on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to start server", error);
  }
};

main();
