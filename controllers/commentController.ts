import {IGetUserAuthInfoRequest} from "../types/userAuthResponseInterface";
import {NextFunction, Response} from "express";
import Comment from "../models/Comment";

export const addComment = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const newComment = new Comment({...req.body, userId: req.user.id});
    try {
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    } catch (err) {
        next(err);
    }
}

export const deleteComment = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    try {

    } catch (err) {
        next(err);
    }
}

export const getComments = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    try {

    } catch (err) {
        next(err);
    }
}