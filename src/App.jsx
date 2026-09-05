import { useState } from "react";
import Header from "./components/Header";
import CardFilme from "./components/CardFilme";
import Contador from "./components/Contador";
import Perfil from "./components/Perfil";
//import Footer from './components/Footer';

// Mock de dados (Simulando a resposta da API do TMDB)
let number = 0;
const mockFilmes = [
    {id: 278, title: "Um sonho de liberdade",nota: 7, ano: "1994",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYa3hRkjtSUwAu5Fo3-FVx4oA2S7aVCEZO6iznm2EWpw&s=10",
    }, 
    {id: 238, title: "O poderoso chefão",nota: 7, ano: "1972",
    imagem:"https://m.media-amazon.com/images/M/MV5BYTRmMjkwYzYtYTRiMi00NDJjLTk1NjctMDA3MjY2ZWIyMGQ5XkEyXkFqcGc@._V1_.jpg",
    }, 
    {id: 328, title: "Drive",nota: 8.7, ano: "2012",
    imagem:"https://m.media-amazon.com/images/I/615ot6U8mgL._AC_UF894,1000_QL80_.jpg",
    },
    {id: 596, title: "Mulher nota mil",nota: 10, ano: "1985",
    imagem:"https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/11/03/19872113.jpg",
    }, 
    {id: 873, title: "Sherlock Holmes: O Jogo de Sombras",nota: 7, ano: "2011",
    imagem:"https://br.web.img3.acsta.net/medias/nmedia/18/87/34/84/20028738.jpg",
    }, 
    {id: 436, title: "Sem Licença para Dirigir",nota: 9, ano: "1988",
    imagem:"https://br.web.img3.acsta.net/pictures/15/06/10/16/24/450099.jpg",
    } 
  ];

function App() {
  // Estado 1: Armazenar lista de filmes
  const [filmes, setFilmes] = useState(mockFilmes);

  // Estado 2:
  const [busca, setBusca] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // Lógica de filtro (JavaScript)
  const filtroDeFilmes = mockFilmes.filter((filme) =>
    filme.title.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header busca={busca} setBusca={setBusca} />
      <Contador/>
      <Perfil/>

      {/* Container Principal */}
      <main className="flex-grow max-w-7xl mx-auto px-6 w-full">
        {/* Renderização Condicional */}
        {filtroDeFilmes.length === 0 && !isLoading && (
          <div className="">
            <h2>Nenhum filme encontrado! Filme procurado: {busca}</h2>
            <button
              className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
              onClick={() => setBusca("")}
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* Renderização da Lista */}
        {filtroDeFilmes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockFilmes.map((filme) => (
              <CardFilme key={filme.id} filme={filme} />
            ))}
          </div>
        )}

        {/* */}
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Em Destaque
        </h2>

        {/* Renderização da Lista utilizando .map */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
