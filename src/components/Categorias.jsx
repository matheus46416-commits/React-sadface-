import React from  "react";

const lista = ['Ação','Terror','Comédia'];

export default function listaHtml(){
    return (<ul>
        {lista.map((categoria) => (<li key={categoria}>{categoria}</li>))}
    </ul>);
}