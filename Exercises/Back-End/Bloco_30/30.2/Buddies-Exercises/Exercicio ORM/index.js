const express = require('express')
const bodyParser = require('body-parser');
const { Book } = require('./models');
const { getAllBooks, getBookById } = require('./controllers/GetBooks');
const { createBook, updateBookByID } = require('./controllers/PostBook');
const { deleteBookById } = require('./controllers/DeleteBooks');


const app = express()
const port = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));


app.get('/books', getAllBooks);
app.get('/books/:id', getBookById);

app.post('/books', createBook);
app.post('/books/:id', updateBookByID);

app.delete('/books/:id', deleteBookById);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))