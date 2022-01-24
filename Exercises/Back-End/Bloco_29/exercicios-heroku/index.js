const express = require('express')
const app = express()
const port = process.env.PORT || 3000;  
const varenv = process.env.VAR

app.get('/', (req, res) => res.send(`ESTOU VIVO!!!${process.env.TEXTO}`))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))