const express = require('express')
const userRouter = require('./routes/user')
const app = express()
const PORT = 3000

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

app.use(express.json());

app.use('/user', userRouter);
