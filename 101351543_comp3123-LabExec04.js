var express = require('express')

const SERVER_PORT = 8089
var app = express()

app.get("/hello", (req, res) => {
    res.status(201).send("<h1>Hello Express JS</h1>")
})

app.get("/user", (req, res) => {
    if (req.query.fname == undefined) {
        res.send("Please input your name")
    } else {
        const output = {
            "firstName": req.query.fname,
            "lastName": req.query.lname
        }
        res.status(201).send(JSON.stringify(output))
    }
})

app.post("/user/:fname/:lname", (req, res) => {
    const output = {
        "firstName": req.params.fname,
        "lastName": req.params.lname
    }

    res.status(201).send(JSON.stringify(output))
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})

