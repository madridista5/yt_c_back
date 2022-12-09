import express, {json} from "express";
import {connect} from "./utils/db";
import {userRouter} from "./routes/userRouter";
import {commentRouter} from "./routes/commentRouter";
import {videoRouter} from "./routes/videoRouter";
import {authRouter} from "./routes/authRouter";

const app = express();

app.use(json());

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);
app.use('/api/videos', videoRouter);

app.listen(3001, '0.0.0.0', async () => {
    await connect();
    console.log('Listening on http://localhost:3001');
});
