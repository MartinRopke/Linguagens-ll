import { Card } from 'primereact/card'
import React, { useState } from 'react'
import './Accordion.css'

const Accordion = ({itens}) => {
    const [indiceAtivo, setIndiceAtivo] = useState(null)

    const itemClicado = indice => {
        setIndiceAtivo(indice)
    }

    const expressaoJSX = itens.map((item , indice) => {
        return (
            <Card id='accordion' key={indice} className='border-1 border-400'>
                <div onClick={() => itemClicado(indice)}>
                    <i className='pi pi-angle-down'/>
                    <h5 className='inline ml-3'>{item.titulo}</h5>
                </div>
                <p>{item.conteudo}</p>
            </Card>
        )
    })

    return (
        <div>
            <p>{indiceAtivo}</p>
            {
                expressaoJSX
            }
        </div>
    )
}

export default Accordion