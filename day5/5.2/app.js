const express = require("express")

const app = express()

app.get("/home", () => {
    console.log("You`re in home!")
})

app.listen(3000, () => {
    console.log("Hello world!")
})
