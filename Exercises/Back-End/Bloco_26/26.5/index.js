const express = require('express');
const userRouter = require('./routes/users');
const btcRouter = require('./routes/btc');
const postsRouter = require('./routes/posts');
const teamsRouter = require('./routes/teams');
const errorMiddleWare = require('./middleWares/error.middleware');

const app = express();
const port = 3000;

app.use(express.json())

app.use('/user', userRouter)

app.use('/btc', btcRouter)

app.use('/posts', postsRouter)

app.use('/teams', teamsRouter)

app.all('*', (req,res) => {
  res.status(404).json({message: 'Page Not Found'})
})

app.use(errorMiddleWare)

app.listen(port, () => {
  console.log(`Estou rodando na porta ${port}`)
});
