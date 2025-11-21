import { useState } from "react";
import "./App.css";
import pelis from "./assets/json/movies.json";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
=======
import PelisFilter from "./components/Pelisfilter";
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 0301112 (big commit (header images, filter functionality and more))

function App() {
  // Estado para almacenar el rating seleccionado (0 = todas las películas)
  const [selectedRating, setSelectedRating] = useState(0);

  // Función que recibe el rating desde el componente hijo PelisFilter
  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
    console.log('Rating seleccionado en App:', rating); // console log para debugear 
  };

  // Función para convertir vote_average traido del json (0-10) a su equivalente en estrellas (0-5)
  const convertToStars = (voteAverage) => {
    return Math.round(voteAverage / 2); // 10/2 = 5 estrellas máximo
  };

  // FILTRADO: Si selectedRating es 0, muestra todas las películas
  // Si no, filtra por el número de estrellas convertido desde vote_average
  const peliculasFiltradas = selectedRating === 0 
    ? pelis 
    : pelis.filter(movie => {
        const estrellas = convertToStars(movie.vote_average);
        return estrellas === selectedRating;
      });

  console.log('Películas filtradas:', peliculasFiltradas.length); // Debug

  return (
    <div>
      <Header />
      <img className="header-image" src="src/media/header003.png"></img>
      
      {/* Componente de filtrado - le pasamos la función para cambiar el rating */}
      <PelisFilter onRatingChange={handleRatingChange} />
      
      {/* Contador de películas */}
      <div className="text-center mb-3">
        <p className="text-white p-2">
          Ahora mismo mostrando {peliculasFiltradas.length} de {pelis.length} películas
        </p>
      </div>
      
      {/* Mensaje si no hay películas con ese rating */}
      {peliculasFiltradas.length === 0 && (
        <div className="alert alert-warning text-center m-4">
          No hay películas con {selectedRating} {selectedRating === 1 ? 'estrella' : 'estrellas'}
        </div>
      )}
      
      {/* Grid de películas filtradas */}
      <div className="movies-grid">
        {peliculasFiltradas.map((movie, index) => (
          <MovieCard
            key={movie.id || `${movie.title}-${index}`}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
