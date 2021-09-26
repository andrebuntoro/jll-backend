import { NextFunction, Request, Response } from "express";

import admin from "./firebaseAdminInit";

export interface IGetAuthTokenRequest extends Request {
  authToken: string;
  authId: string;
}

const getAuthToken = (
  req: IGetAuthTokenRequest,
  res: Response,
  next: NextFunction
) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.authToken = null;
  }
  next();
};

export const checkIfAuthenticated = (
  req: IGetAuthTokenRequest,
  res: Response,
  next: NextFunction
) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      const userInfo = await admin.auth().verifyIdToken(authToken);
      req.authId = userInfo.uid;
      return next();
    } catch (e) {
      return res
        .status(401)
        .send({ error: "You are not authorized to make this request" });
    }
  });
};

export const checkIfAdmin = (
  req: IGetAuthTokenRequest,
  res: Response,
  next: NextFunction
) => {
  getAuthToken(req, res, async () => {
    try {
      const userInfo = await admin.auth().verifyIdToken(req.authToken);
      if (userInfo.role === "admin") {
        req.authId = userInfo.uid;
        return next();
      }
    } catch (e) {
      return res
        .status(401)
        .send({ error: "You are not authorized to make this request" });
    }
  });
};
