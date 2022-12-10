import {Request} from "express";
import {UserResponse} from "./userResponseInterface";

export interface IGetUserAuthInfoRequest extends Request {
    user: UserResponse;
}