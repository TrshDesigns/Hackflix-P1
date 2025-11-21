import { Rating } from 'react-simple-star-rating';

function MovieCard({ movie }) {
  const rating = movie.vote_average ? (movie.vote_average / 10) * 5 : 0;

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
        
        {}
        <div className="movie-rating" style={{ marginTop: "10px", textAlign: "center" }}>
          <Rating
            initialValue={rating}        
            readonly={true}               
            allowFraction 
            size={28}                     
            fillColor="#f4c150"           
            emptyColor="#e4e5e9"         
          />
          <p style={{ margin: "5px 0 0", fontSize: "0.9rem", color: "#666" }}>
            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} / 10
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;