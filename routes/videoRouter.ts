import express from "express";
import {
    addVideo,
    addView,
    deleteVideo, getByTag,
    getVideo,
    random, search,
    sub,
    trend,
    updateVideo
} from "../controllers/videoController";
import {verifyToken} from "../utils/verifyToken";

export const videoRouter = express.Router();

videoRouter
    .post('/', verifyToken, addVideo)
    .put('/:id', verifyToken, updateVideo)
    .delete('/:id', verifyToken, deleteVideo)
    .get('/find/:id', getVideo)
    .put('/view/:id', addView)
    .get('/trend', trend)
    .get('/random', random)
    .get('/sub', verifyToken, sub)
    .get('/tags', getByTag)
    .get('/search', search);