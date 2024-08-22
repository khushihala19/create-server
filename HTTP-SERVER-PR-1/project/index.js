const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("home page")
    }
    else if (req.url == "/login") {
        res.end("login")
    }
    else {
        res.end("api")
    }
})

server.listen(8090, () => {
    console.log("listening on port 8090 ");

})