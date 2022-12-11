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

export const deleteUser = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    if(req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('User has been deleted.');
        } catch (err) {
            next(err);
        }
    } else {
        next(createError(403, 'You can only delete your account!'));
    }
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user) {
            return next(createError(404, 'The user does not exist!'));
        }
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const subscribe = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    try {
        // adding video id to the user
        await User.findByIdAndUpdate(req.user.id, {
            $push: {subscribeUsers: req.params.id},
        });
        // increasing subscribes number
        await User.findByIdAndUpdate(req.params.id, {
            $inc: {subscribes: 1},
        });
        res.status(200).json('Subscription successful.');
    } catch (err) {
        next(err);
    }
};

export const unsubscribe = async (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: {subscribeUsers: req.params.id},
        });
        await User.findByIdAndUpdate(req.params.id, {
            $inc: {subscribes: -1},
        });
        res.status(200).json('Unsubscription successful.');
    } catch (err) {
        next(err);
    }
};

export const like = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (err) {
        next(err);
    }
};

export const dislike = async (req: Request, res: Response, next: NextFunction) => {
    try {

    } catch (err) {
        next(err);
    }
};