import React from "react";
import { Rating } from "react-simple-star-rating";

function PelisFilter({ cambiarRating }) {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
    onRatingChange(rate);
  };
}
