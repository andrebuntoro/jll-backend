"use strict";

import * as express from "express";

import bodyParser from "body-parser";
const jsonParser = bodyParser.json();

import userHandler from "./user-handler";

export const register = (app: express.Application): express.Application => {
  app.get("/health", (req: express.Request, res: express.Response) =>
    res.send("Healthy")
  );

  app.post(
    "/user",
    jsonParser,
    async (req: express.Request, res: express.Response) => {
      return userHandler.handleSignUp(req, res);
    }
  );

  return app;
};
