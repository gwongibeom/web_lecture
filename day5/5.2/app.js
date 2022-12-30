const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Main")
    console.log("Main")
})

app.get("/home", (req, res) => {
    res.send("<h1>You`re in home!</h1>")
})

app.get("/userinfo", (req, res) => {
    req.send({ name: "yeji", age: 20 })
})

app.listen(3000, (res, req) => {
    console.log("Hello Server!")
})
