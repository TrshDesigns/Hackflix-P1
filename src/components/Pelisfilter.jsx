import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import "./PelisFilter.css";

function PelisFilter({ onRatingChange }) {
  // Estado local para manejar el rating
  const [rating, setRating] = useState(0);

  // Función que se ejecuta cuando el usuario selecciona un rating
  const handleRating = (rate) => {
    const ratingValue = Math.round(rate);

    console.log("Rating recibido:", rate);
    console.log("Rating convertido:", ratingValue);

    // Actualizamos el estado
    setRating(ratingValue);
    // Notificamos al componente padre (App)
    onRatingChange(ratingValue);
  };

  return (
    <div className="rating-container">
      <div className="filter-section">
        <button
          className={`btn ${
            rating === 0 ? "btn-danger" : "btn-outline-danger"
          } m-2`}
          onClick={() => {
            setRating(0);
            onRatingChange(0);
          }}
        >
          Todas las películas
        </button>

        <div className="star-rating-wrapper">
          <Rating
            onClick={handleRating}
            initialValue={rating}
            size={35}
            transition
            fillColor="#ffd607ff"
            emptyColor="#e4e5e9"
            allowFraction={false}
            iconsCount={5}
          />
        </div>
      </div>
    </div>
  );
}

export default PelisFilter;
