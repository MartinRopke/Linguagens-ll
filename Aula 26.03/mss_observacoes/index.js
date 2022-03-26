const express = require('express')
const app = express()
app.use(express.json())

//POST
//host:porta/lembretes/123456/observacoes
app.post('lembretes/:id/observacoes', (res, req) => {
    res.send("Funciona!")
})

//GET
app.get('lembretes/id/observacoes', (res, req) => {
    res.send("Funciona!")
})

app.listen(5000, () => {
    console.log('Lembretes. Porta 5000.')
})