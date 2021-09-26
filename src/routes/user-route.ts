"use strict";

import * as express from "express";

import bodyParser from "body-parser";
const jsonParser = bodyParser.json();

import userHandler from "./user-handler";
import { checkIfAuthenticated, checkIfAdmin } from "../firebaseMiddleware";

export const register = (app: express.Application): express.Application => {
  app.post(
    "/jll-backend/user",
    jsonParser,
    async (req: express.Request, res: express.Response) => {
      return userHandler.handleSignUp(req, res);
    }
  );

  app.post(
    "/jll-backend/user/role",
    checkIfAdmin,
    jsonParser,
    async (req: express.Request, res: express.Response) => {
      return userHandler.handleGrantRole(req, res);
    }
  );

  app.get("/jll-backend/health", checkIfAdmin, (_, res: express.Response) =>
    res.send("Healthy")
  );

  app.get("/jll-backend/healthV2", checkIfAdmin, (_, res: express.Response) =>
    res.send("HealthyV2")
  );

  return app;
};
