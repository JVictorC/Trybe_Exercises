import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import router from './routers';

const app = express();

app.use(express.json());

app.listen(3000, () => 'server running on port 3333');

app.use(router);

app.use(errorMiddleware)
