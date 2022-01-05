import express from 'express';
import routerProduct from './Controllers/ProductController';
import ErrorMiddleWare from './middlewares/ErrorMiddleWare';

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/products', routerProduct);

app.use(ErrorMiddleWare);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));