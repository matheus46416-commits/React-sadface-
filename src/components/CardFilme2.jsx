export default function CardFilme({titulo, nota, ano, imagem}){
    return(
        <div className="bg-zinc-800 rounded-xl border border-gray-700 hover:border-yellow-500 overflow-hidden transition-colors shadow-lg w-64">
            {/*Image soon*/}
            <img src={imagem} alt={titulo} className="w-full h-80 object-cover" />
            <div className="px-5 py-5">
                {/*Título recebida via Props */}
                <h2 className="text-lg font-bold text-gray-109 mb=2 truncate">{titulo}</h2>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Ano:</span>
                    <span className="px-2 py-1 text-xs font-bold"> {ano} </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Nota:</span>
                    {/*Nota recebida via Props */}
                    <span className="bg-yellow-500 text-black font-bold px-2 py-1 rounded text-xs"> ⭐  {nota}</span>
                </div>
            </div>
        </div>
    );
}