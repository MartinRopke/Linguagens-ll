const express = require('express');
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
app.post("/lembretes", (req, res) => {
    contador++
    const{ texto } = req.body
    lembretes[contador] = {contador, texto}
    res.status(201).send(lembretes[contador])
});

app.listen(4000, () => {
    console.log("Lembretes. Porta 4000.")
})