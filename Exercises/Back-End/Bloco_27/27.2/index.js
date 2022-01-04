const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddlewares');
const cepRouter = require('./routes/cep');
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => res.send('pong!'));

app.use('/cep', cepRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(errorMiddleware);