const express = require('express')
const app = express()
const PORT = 5000

app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.status(200).send('Hello World')
// })

app.listen(PORT, () => {
    console.info("Server is listening on Port", PORT);
})
