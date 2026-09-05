import { useState } from "react";

function Perfil (){
    const [nome,setNome] = useState("");

    return(
        <>
            <input type="text"
                onInput={(escrita) => {setNome(escrita.target.value)}}
             placeholder="Escreve teu nome aí pive"/>
            <h2>
                Bem-vindo {nome}
            </h2>
        </>
    );
}

export default Perfil;