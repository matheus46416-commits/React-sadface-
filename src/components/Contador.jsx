import { useState } from 'react';

function Contador() {
    /**/
    const [number, setContador] = useState(0)

    return (
        <button
        onClick={() => setContador(number + 1)}>
            {number}
        </button>
    );
}

export default Contador;