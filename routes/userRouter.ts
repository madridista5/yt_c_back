import express from "express";
import {test} from "../controllers/userController";

export const userRouter = express.Router();

userRouter
    .get('/test', test);