const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())


app.post('/eventos', (req, res) => {
    const evento = req.body

    axios.post('locahost:4000/eventos', evento)
    axios.post('locahost:5000/eventos', evento)

    res.status(200).send("ok")
})

app.listen(1000, () => {
    console.log("Barramento de eventos. Porta 1000.")
})