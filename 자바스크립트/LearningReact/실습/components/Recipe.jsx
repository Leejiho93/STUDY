import React from 'react';
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';

const Recipe = ({ name, ingredients, steps }) => {
  return (
    <section>
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      <Instructions title="조리 절차" steps={steps} />
    </section>
  );
};

export default Recipe;
