const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
    console.log("User hit the resource")
    res.send("Home Page")
})

app.get('/about', (req, res) => {
    res.status(200).send("About Page")
})

app.all('*', (req, res) => {
    res.status(400).send("404 Not Found!")
})

app.listen(PORT, () => {
    console.log(`Awesome! Your nodejs server is live on port ${PORT}. Time to unleash your creativity! \nhttp://localhost:${PORT}`)
})
