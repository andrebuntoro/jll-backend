import * as express from "express";

import logger from "../utils/logger";
import { UserParam } from "../param/user";
import catService from "../service/cat";

const handleGetRandomCat = async (
  res: express.Response
): Promise<express.Response> => {
  try {
    const cat = await catService.getRandomCat();
    return res.status(200).send(cat);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).send({
      error_code: "SERVER_ERROR",
      message: err.message,
    });
  }
};

const handleGetCatByBreed = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response> => {
  try {
    const breedId = req.params.breedId;

    if (!breedId) {
      const errMsg = "breedId can not be empty";
      logger.error(errMsg);
      return res.status(400).send({
        error_code: "BAD_REQUEST",
        message: errMsg,
      });
    }

    const cat = await catService.getCatByBreed(breedId);

    return res.send(cat);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).send({
      error_code: "SERVER_ERROR",
      message: err.message,
    });
  }
};

const handleGetCatBreeds = async (
  res: express.Response
): Promise<express.Response> => {
  try {
    const breeds = await catService.getCatBreeds();

    return res.send(breeds);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).send({
      error_code: "SERVER_ERROR",
      message: err.message,
    });
  }
};

export default {
  handleGetRandomCat,
  handleGetCatByBreed,
  handleGetCatBreeds,
};
