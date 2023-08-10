const express = require('express')
const app = express()
const logger = require('./logger')
const PORT = 4000

app.use(logger)

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/product/:id', (req, res) => {
    const { id } = req?.params
    console.log({ id })
    res.send("Single Product Page");
})

app.get('/products', (req, res) => {
    res.send("Multi Product Page");
})

app.listen(PORT, () => {
    console.log("App is listening on PORT" + PORT)
})