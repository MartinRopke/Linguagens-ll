import React from "react"
import axios from 'axios'
import { InputText } from "primereact/inputtext"
import { useState } from "react"
import { useEffect } from "react"

const Busca = () => {
    const [termoBusca, setTermoDeBusca] = useState('')
    const [resultados, setResultados] = useState([])

    useEffect(() => {
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
                        </div>
                             {/* padding */}
                        <div className='p-2'>
                            {resultado.snippet}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Busca