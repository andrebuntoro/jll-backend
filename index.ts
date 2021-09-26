"use strict";

const port = 8010;

import logger from "./src/utils/logger";
import express from "express";
import * as userRoutes from "./src/routes/user-route";

const main = async () => {
  try {
    const app = express();
    userRoutes.register(app);

    app.listen(port, () => {
      const msg = `App started and listening on port ${port}`;
      console.log(msg);
      logger.info(msg);
    });
  } catch (err) {
    const msg = "Error occured, please check logs for more details \n";
    console.log(msg);
    logger.info(msg);
    logger.error(err.message);
  }
};

main();
