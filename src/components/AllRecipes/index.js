import React from 'react';
import Recipe from '../Recipe';
import './AllRecipes.css';

const AllRecipes = props => {
  const recipeCollection = props.recipes.map(recipe => (<Recipe 
                                                          { ...props } 
                                                          { ...recipe } />));
  return (
    <section className='recipes-container'>
      { recipeCollection }
    </section>
  );
};

export default AllRecipes;
