function Contador(){
    let number = 0;
    return (<><button onClick={number++}>Botão</button><p>{number}</p></>
    );
}

export default Contador;