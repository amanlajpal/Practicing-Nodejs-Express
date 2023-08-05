const express = require('express')
const app = express()
const { products } = require('./data.js')

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/api/v1/first.json", (req, res) => {
    res.json([{ Status: "200" }, { request: "successfull! " }])
})

app.get("/api/v1/products", (req, res) => {
    res.json(products)
})

app.get("/api/v1/products/:productId", (req, res) => {
    const { productId } = req?.params
    console.log(productId)
    res.json(products.find((product) => {
        return product?.id === +productId
    }))
})

app.all("*", (req, res) => {
    res.send("404 Not Found :(")
})

app.listen(4000, () => {
    console.log("Serving is running at http://localhost:4000")
})