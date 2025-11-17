import "./App.css";

import pelis from "./assets/json/movies.json";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <div className="">
        <img
          src={movie.poster_path}
          alt={movie.title}
          width="150"
          className="movie-poster"
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="movies-grid">
      {pelis.map((movie, index) => (
        <MovieCard key={movie.id || `${movie.title}-${index}`} movie={movie} />
      ))}
    </div>
  );
}

export default App;
