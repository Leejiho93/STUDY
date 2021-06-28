import React from 'react';
import Ingredient from './Ingredient';

const IngredientsList = ({ list }) => {
  return (
    <ul>
      {list.map((ingredient, i) => {
        return <Ingredient key={i} {...ingredient} />;
      })}
    </ul>
  );
};

export default IngredientsList;
