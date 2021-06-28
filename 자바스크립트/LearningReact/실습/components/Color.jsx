import React, { useEffect } from 'react';
import StarRating from './StarRating';

const Color = ({
  title,
  color,
  rating = 0,
  onRemove = f => f,
  onRate = f => f,
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={onRemove}>삭제</button>
      <div className="color" style={{ backgroundColor: color }}></div>
      <div>
        <StarRating starsSelected={rating} onRate={onRate} />
      </div>
    </section>
  );
};

export default Color;
