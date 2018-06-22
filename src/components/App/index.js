import React, { Component } from 'react';
import Routes from '../Routes';
import SideBar from '../SideBar';
import { pipe } from '../../helpers'

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  };

  addRecipe = recipe => {
    const recipes = [...this.state.recipes, recipe]
    this.setState({ recipes });
  }

  removeRecipe = id => {
    const recipes = this.state.recipes.filter(recipe => recipe.id !== id);
    this.setState({ recipes });
  }

  editRecipe = ({ id, newTitle, newIngredients }) => {
    const { recipes } = this.state;
    const unEditedRecipe = recipes.find(recipe => recipe.id === id);
    const position = recipes.indexOf(unEditedRecipe);
    recipes[position] = { id, title: newTitle, ingredients: newIngredients };
    this.setState({ recipes });
  }

  render() {
    return (
      <section>
        <Routes 
         addRecipe={ this.addRecipe }
         recipes={ this.state.recipes }
         showEdit={ this.state.showEdit }
         editRecipe={ this.editRecipe } />
        <SideBar />
     </section>
    );
  };
};
export default App;
