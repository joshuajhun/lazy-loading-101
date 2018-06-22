import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '', 
      ingredients: ''
    };
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  submitRecipeToApp = (event) => {
    event.preventDefault();
    const recipe = { ...this.state, id: Date.now() };
    this.props.addRecipe(recipe);
    this.setState({
      title: '', 
      ingredients: ''
    })
  }

  render() {
    const { title, ingredients } = this.state;
    return (
      <section className='form-container'>
        <form 
          onSubmit={ this.submitRecipeToApp }>
          <input
            className='title'
            type='text'
            name='title'
            value={ title }
            placeholder='Recipe Title'
            onChange={ this.handleChange } />
          <textarea
            className='ingredients'
            type='text'
            name='ingredients'
            value={ ingredients }
            placeholder='Recipe Ingredients'
            onChange={ this.handleChange } />
          <input 
            className='submit-button'
            type='submit' />
        </form>
      </section>
    );
  };
};

export default Form;
