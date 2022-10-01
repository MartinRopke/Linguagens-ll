import React from "react"
import Imagem from "./Imagem"

const ListaImagens = ({pics}) => {
    return (
     pics.map(pic => 
        <Imagem src={pic.src.small} atl={pic.alt} key={pic.id}/>
        )   
    )
}

export default ListaImagens