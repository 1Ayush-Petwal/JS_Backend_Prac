require('dotenv').config()
const express = require('express') // express is the object of the express api
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/apj", (req, res) => {
    res.send("Understanding the basics");
})

app.get("/apj/app", (req, res) => {
    res.send("The best course yet");
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})