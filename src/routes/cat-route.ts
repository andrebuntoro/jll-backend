"use strict";

import * as express from "express";

import catHandler from "./cat-handler";
import { checkIfAuthenticated, checkIfAdmin } from "../firebaseMiddleware";

export const register = (app: express.Application): express.Application => {
  app.get(
    "/jll-backend/cat",
    checkIfAuthenticated,
    async (_, res: express.Response) => {
      return catHandler.handleGetRandomCat(res);
    }
  );

  app.get(
    "/jll-backend/cat/breeds",
    checkIfAdmin,
    (_, res: express.Response) => {
      return catHandler.handleGetCatBreeds(res);
    }
  );

  app.get(
    "/jll-backend/cat/action/search",
    checkIfAdmin,
    async (req: express.Request, res: express.Response) => {
      return catHandler.handleGetCatByBreed(req, res);
    }
  );

  return app;
};
