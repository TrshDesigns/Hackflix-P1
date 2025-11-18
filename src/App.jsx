import "./App.css";
import pelis from "./assets/json/movies.json";
import MovieCard from "./components/Moviecard";
import { Rating } from "react-simple-star-rating";

function App() {
  return (
    <div>
      <div className="rating-container">
        <Rating />
      </div>
      <div className="movies-grid">
        {pelis.map((movie, index) => (
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
