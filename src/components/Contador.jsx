import { useState } from 'react';

function Contador() {

    const [number, setContador] = useState(0)

    return (
        <>
        <span>{number}</span>
        <button
        onClick={() => setContador(number + 1)}>
            me clique
        </button>
        <button onClick={() => {
            number > 0 && setContador(number - 1)}
        }>diminuir</button>
        </>
    );
}

export default Contador;