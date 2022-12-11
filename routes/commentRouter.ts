import express from "express";
import {addComment, deleteComment, getComments} from "../controllers/commentController";
import {verifyToken} from "../utils/verifyToken";

export const commentRouter = express.Router();

commentRouter
    .post('/', verifyToken, addComment)
    .delete('/:id', verifyToken, deleteComment)
    .get('/:videoId', getComments);