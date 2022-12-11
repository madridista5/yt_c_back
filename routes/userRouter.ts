import express from "express";
import {deleteUser, dislike, getUser, like, subscribe, unsubscribe, update} from "../controllers/userController";
import {verifyToken} from "../utils/verifyToken";

export const userRouter = express.Router();

userRouter
    .put('/:id', verifyToken, update)
    .delete('/:id', verifyToken, deleteUser)
    .get('/find/:id', getUser)
    .put('/sub/:id', verifyToken, subscribe)
    .put('/unsub/:id', verifyToken, unsubscribe)
    .put('/like/:videoId', verifyToken, like)
    .put('/dislike/:videoId', verifyToken, dislike);
