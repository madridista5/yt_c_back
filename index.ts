import express, {json, NextFunction, Request, Response} from "express";
import {connect} from "./utils/db";
import {userRouter} from "./routes/userRouter";
import {commentRouter} from "./routes/commentRouter";
import {videoRouter} from "./routes/videoRouter";
import {authRouter} from "./routes/authRouter";
import {myError} from "./utils/error";

const app = express();

app.use(json());

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);
app.use('/api/videos', videoRouter);

app.use((err: myError, req: Request, res: Response, next: NextFunction) => {
   const status = err.status || 500;
   const message = err.message || 'Something went wrong!';
   res.status(status).json({
       success: false,
       status,
       message,
   });
});

app.listen(3001, '0.0.0.0', async () => {
    await connect();
    console.log('Listening on http://localhost:3001');
});
