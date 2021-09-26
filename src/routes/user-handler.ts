import * as express from "express";

import logger from "../utils/logger";
import { UserParam } from "../param/user";
import userService from "../service/user";

const handleSignUp = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response> => {
  try {
    const data = req.body;
    const request: UserParam = {
      email: data.email,
      password: data.password,
    };

    if (!request.email) {
      const errMsg = "email can not be empty";
      logger.error(errMsg);
      return res.status(400).send({
        error_code: "BAD_REQUEST",
        message: errMsg,
      });
    }

    if (!request.password) {
      const errMsg = "password can not be empty";
      logger.error(errMsg);
      return res.status(400).send({
        error_code: "BAD_REQUEST",
        message: errMsg,
      });
    }

    await userService.signUp(request);

    return res.status(200).send("success");
  } catch (err) {
    logger.error(err.message);
    return res.status(500).send({
      error_code: "SERVER_ERROR",
      message: err.message,
    });
  }
};

const handleGrantRole = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response> => {
  try {
    const data = req.body;
    const request: UserParam = {
      email: data.email,
      role: data.role,
    };

    if (!request.email) {
      const errMsg = "email can not be empty";
      logger.error(errMsg);
      return res.status(400).send({
        error_code: "BAD_REQUEST",
        message: errMsg,
      });
    }

    if (!request.role) {
      const errMsg = "role can not be empty";
      logger.error(errMsg);
      return res.status(400).send({
        error_code: "BAD_REQUEST",
        message: errMsg,
      });
    }

    await userService.grantRole(request);

    return res.send({ message: "Success" });
  } catch (err) {
    logger.error(err.message);
    return res.status(500).send({
      error_code: "SERVER_ERROR",
      message: err.message,
    });
  }
};

export default {
  handleSignUp,
  handleGrantRole,
};
