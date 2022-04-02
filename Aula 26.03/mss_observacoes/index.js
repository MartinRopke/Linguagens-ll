const express = require('express')
const {v4 : uuidv4} = require('uuid')
const app = express()
app.use(express.json())

const observaoesPoRLembreteId = {}
//POST
//host:porta/lembretes/123456/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {
    const id0bs = uuidv4()
    //const texto = req.body.texto
    const {texto} = req.body
    if(!isNaN (req.params.id)){
        const observaoesDoLembrete = observaoesPoRLembreteId[req.params.id] || []
        observaoesDoLembrete.push({id : id0bs, texto})
        observaoesPoRLembreteId[req.params.id] = observaoesDoLembrete
        res.status(201).send(observaoesDoLembrete)
    }else{
        res.status(404).send("Id preisa ser um numero aniamal!")
    }
})

//GET
app.get('/lembretes/:id/observacoes', (req, res) => {
    if(observaoesPoRLembreteId[req.params.id]) res.send(observaoesPoRLembreteId[req.params.id])
    else res.status(404).send('Esse id não esxiste')
})

app.listen(5000, () => {
    console.log('Lembretes. Porta 5000.')
})