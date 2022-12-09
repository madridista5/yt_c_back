import express, {json, Request, Response} from "express";
import {connect} from "./utils/db";

const app = express();

app.use(json());

app.get('/', (req: Request, res: Response) => {
    res.send('ok');
});

app.listen(3001, '0.0.0.0', () => {
    connect();
    console.log('Listening on http://localhost:3001');
});
