import React, { Component } from 'react';
import EditRecipe from '../EditRecipe';
import './Recipe.css';

class Recipe extends Component {
  constructor() {
    super();
    this.state ={
      showEdit: false
    };
  };

  toggleEdit = () => this.setState({ showEdit: !this.state.showEdit });

  renderEdit = () => {
    return this.state.showEdit && <EditRecipe  
                                    {...this.props}
                                    toggleEdit={ this.toggleEdit }
                                    showEdit={ this.state.showEdit }/>
  }
  

  render() {
    const { title, ingredients } = this.props;
    return (
      <section className='recipe-container'>
        <section className='recipe-card'>
          <h3 className='recipe-title'> Dish: { title } </h3>
          <p className='recipe-ingredients'> <h3> Ingredients: </h3>{ ingredients } </p>
          <button 
            className='edit'
            onClick={ this.toggleEdit }> edit </button>
        { this.renderEdit() }
        </section>
      </section>
    );
  }
};

export default Recipe;
