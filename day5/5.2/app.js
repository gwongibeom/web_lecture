const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("응애")
    console.log("You`re in home!")
})

app.get("/home", () => {
    console.log("You`re in home!")
})

app.listen(3000, (res, req) => {
    console.log("Hello world!")
})
