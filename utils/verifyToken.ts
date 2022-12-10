import {NextFunction, Response} from "express";
import {createError, myError} from "./error";
import jwt from "jsonwebtoken";
import { IGetUserAuthInfoRequest } from "../types/userAuthResponseInterface";
import {UserResponse} from "../types/userResponseInterface";

export const verifyToken = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token;
    if(!token) return next(createError(401, 'You are not authenticated!'));

    jwt.verify(token, process.env.SECRET_KEY, (err: myError, user: UserResponse) => {
        if(err) return next(createError(403, 'Token is not valid'));
        req.user = user;
        next();
    })
}