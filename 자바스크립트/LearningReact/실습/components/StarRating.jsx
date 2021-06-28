import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) => {
  return (
    <div>
      {[...Array(totalStars)].map((n, i) => {
        return (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => onRate(i + 1)}
          />
        );
      })}
      <p>
        별점: {starsSelected} / {totalStars}
      </p>
    </div>
  );
};

StarRating.propTypes = {
  totalStars: PropTypes.number,
  totalStars: PropTypes.number,
  onRate: PropTypes.func,
};

export default StarRating;
