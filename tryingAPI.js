const http = require('http')

const statusCodes = http.STATUS_CODES
const methods = http.METHODS

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("hello world");
    }
})


server.listen(5000, () => {
    console.log("server listening on port 5000, here is it http://localhost:5000")
})