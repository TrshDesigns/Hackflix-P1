import "./App.css";
import pelis from "./assets/json/movies.json";
import MovieCard from "./components/Moviecard";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header></Header>
      <div className="rating-container">
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
