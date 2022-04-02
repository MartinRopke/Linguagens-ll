const express = require('express');
const axios = require('axios')
const app = express();


app.use((req, res, next) => {
    console.log('Oi')
    next()
})
app.use(express.json())

const lembretes = {}
let contador = 0

//exemplo.com.br/lembretes
app.get("/lembretes", (req, res) => {
    res.send(lembretes)
});

//Post
//exemplo.com.br/lembretes
app.post("/lembretes", async (req, res) => {
    contador++
    const{ texto } = req.body
    lembretes[contador] = {contador, texto}
    axios.post("http://localhost:1000/eventos",{
            tipo: "LembreteCriado",
            dados: lembretes[contador]
        })
        .then(() => res.status(201).send(lembretes[contador]))
        .catch((e) => {
            console.log(e)
            res.status(500).end()
        })
});

app.listen(4000, () => {
    console.log("Lembretes. Porta 4000.")
})