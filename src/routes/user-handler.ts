import * as express from "express";

import logger from "../utils/logger";
import decrypt from "../utils/decrypt";
import { UserParam } from "../param/user";
import userService from "../service/user";

const handleSignUp = async (
  req: express.Request,
  res: express.Response
): Promise<express.Response> => {
  const data = JSON.parse(decrypt(req.body.data));

  const request: UserParam = {
    email: data.email,
    password: data.password,
    role: data.role,
  };

  try {
    const user = await userService.signUp(request);
    return res.status(200).send(user);
  } catch (err) {
    logger.error(err.message);
    return res.status(500).send({
      error_code: "SERVER_ERROR",
      message: "Unknown error",
    });
  }
};

export default {
  handleSignUp,
};
