import React from "react"
import axios from 'axios'
import { InputText } from "primereact/inputtext"
import { useState } from "react"
import { useEffect } from "react"
import { Button } from "primereact/button"

const Busca = () => {
    const [termoBusca, setTermoDeBusca] = useState('')
    const [resultados, setResultados] = useState([])

    useEffect(() => {
        const timoutID = setTimeout(() => {
            if(termoBusca)
            axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    //instruindo o navegador a permitir
                    //conteudo de qualquer origem
                    origin: '*',
                    srsearch: termoBusca
                }
            }).then(res => setResultados(res.data.query.search))
        }, 1000)
        return () => clearTimeout(timoutID)
    }, [termoBusca])

    return(
        <div>
            <span className="p-input-icon-left">
                <i className="pi pi-sear" />
                <InputText onChange={event => setTermoDeBusca(event.target.value)} />
            </span>
            {
                resultados.map(resultado => (
                                                //margem e borda
                    <div key={resultado.pageid} className='my-2 border border-1 border-400'>
                             {/* borda, padding e ajuste textual */}
                        <div className='border-bottom border border-1 border-400 p-2 text-center font-bold'>
                            {resultado.title}
                            <span>
                                <Button
                                    icon="pi pi-send"
                                    className="ml-2 p-button-rounded p-button-secondary"
                                    onClick={ () => window.open(`https://en.wikipedia.org?curid=${resultado.pageid}`)}
                                    />
                            </span>
                        </div>
                             {/* padding */}
                        <div className='p-2'>
                            <span dangerouslySetInnerHTML={{__html: resultado.snippet}} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Busca