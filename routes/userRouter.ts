import express from "express";
import {deleteUser, dislike, getUser, like, subscribe, unsubscribe, update} from "../controllers/userController";
import {verifyToken} from "../utils/verifyToken";

export const userRouter = express.Router();

userRouter
    .put('/:id', verifyToken, update)
    .delete('/:id', deleteUser)
    .get('/find/:id', getUser)
    .put('/sub/:id', subscribe)
    .put('/unsub/:id', unsubscribe)
    .put('/like/:videoId', like)
    .put('/dislike/:videoId', dislike);
