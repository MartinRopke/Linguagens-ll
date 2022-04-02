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
        res.status(404).send('<font size="20"><strong>Id preisa ser um numero aniamal!</strong></font>')
    }
})

//GET
app.get('/lembretes/:id/observacoes', (req, res) => {
     res.send(observaoesPoRLembreteId[req.params.id] || '<image src="https://th.bing.com/th/id/OIP.IZJSPD7EUk6sdKfNaltGMAHaFc?pid=ImgDet&rs=1"><div><font size="20"><strong>Esse id não esxiste</strong></font></div>')  
})

app.listen(5000, () => {
    console.log('Lembretes. Porta 5000.')
})