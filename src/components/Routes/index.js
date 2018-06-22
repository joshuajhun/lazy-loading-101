import { Switch, Route  } from 'react-router';
import React from 'react';
import AllRecipes from '../AllRecipes';
import Form from '../Form';
import Home from '../Home';

const Routes = ({ addRecipe, recipes, showEdit, editRecipe }) => {
  return (
    <Switch>
      <Route path='/add-recipe' render={ () => <Form addRecipe={ addRecipe } /> } />
      <Route path='/recipes' render={ () => <AllRecipes 
                                              recipes={ recipes }
                                              editRecipe={ editRecipe }
                                              showEdit={ showEdit } /> } />
      <Route path='/' component={ Home }/>
    </Switch>
  )
}

export default Routes;
