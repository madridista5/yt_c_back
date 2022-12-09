import express from "express";
import {signUp} from "../controllers/authController";

export const authRouter = express.Router();

authRouter
    .post('/signup', signUp)
    .post('/signin')
    .post('/google');