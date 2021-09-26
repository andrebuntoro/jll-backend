"use strict";

import * as express from "express";

import catHandler from "./cat-handler";
import { checkIfAuthenticated, checkIfAdmin } from "../firebaseMiddleware";

export const register = (app: express.Application): express.Application => {
  app.get("/jll-backend/cat", async (_, res: express.Response) => {
    return catHandler.handleGetRandomCat(res);
  });

  app.get(
    "/jll-backend/cat/breeds/:breedId",
    async (req: express.Request, res: express.Response) => {
      return catHandler.handleGetCatByBreed(req, res);
    }
  );

  app.get("/jll-backend/cat/breeds", (_, res: express.Response) => {
    return catHandler.handleGetCatBreeds(res);
  });

  return app;
};
