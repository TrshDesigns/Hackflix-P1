function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <div className="movie-card-container">
        <img
          src={movie.poster_path}
          alt={movie.title}
          width="200"
          className="movie-poster"
        />
      </div>
    </div>
  );
}

export default MovieCard;
