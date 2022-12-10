import {NextFunction, Request, Response} from "express";
import {createError} from "../utils/error";
import User from "../models/User";
import {IGetUserAuthInfoRequest} from "../types/userAuthResponseInterface";

export const update = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {

    if(req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {new: true});
            res.status(200).json(updatedUser);
        } catch (err) {
            next(err);
        }
    } else {
        next(createError(403, 'You can only update your account!'));
    }
};

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {

};

export const getUser = (req: Request, res: Response, next: NextFunction) => {

};

export const subscribe = (req: Request, res: Response, next: NextFunction) => {

};

export const unsubscribe = (req: Request, res: Response, next: NextFunction) => {

};

export const like = (req: Request, res: Response, next: NextFunction) => {

};

export const dislike = (req: Request, res: Response, next: NextFunction) => {

};