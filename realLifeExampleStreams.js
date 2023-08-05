var fs = require('fs')
var http = require('http')

const server = http.createServer((req, res) => {
    const fileStream = fs.createReadStream("./content/bigFile.txt", 'utf-8')
    fileStream.on("open", () => {
        fileStream.pipe(res)
    })
    fileStream.on("error", (error) => {
        res.end(error)
    })
})

server.listen(5000)