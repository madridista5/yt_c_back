import express from "express";
import {deleteUser, dislike, getUser, like, subscribe, unsubscribe, update} from "../controllers/userController";

export const userRouter = express.Router();

userRouter
    .post('/:id', update)
    .delete('/:id', deleteUser)
    .get('/find/:id', getUser)
    .put('/sub/:id', subscribe)
    .put('/unsub/:id', unsubscribe)
    .put('/like/:videoId', like)
    .put('/dislike/:videoId', dislike);
