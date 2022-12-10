import express from "express";
import {signIn, signUp} from "../controllers/authController";

export const authRouter = express.Router();

authRouter
    .post('/signup', signUp)
    .post('/signin', signIn)
    .post('/google');