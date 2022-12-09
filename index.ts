import express, {json, Request, Response} from "express";
import {connect} from "./utils/db";
import {userRouter} from "./routes/userRouter";
import {commentRouter} from "./routes/commentRouter";
import {videoRouter} from "./routes/videoRouter";

const app = express();

app.use(json());

app.get('/', (req: Request, res: Response) => {
    res.send('ok');
});

app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);
app.use('/api/videos', videoRouter);

app.listen(3001, '0.0.0.0', () => {
    connect();
    console.log('Listening on http://localhost:3001');
});
