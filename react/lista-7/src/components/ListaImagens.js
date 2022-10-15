import React from "react"
import Imagem from "./Imagem"

const ListaImagens = ({pics, imgStyle}) => {
    return (
     pics.map(pic => 
        <Imagem src={pic.src.small} atl={pic.alt} key={pic.id} imgStyle={imgStyle}/>
        )   
    )
}

export default ListaImagens