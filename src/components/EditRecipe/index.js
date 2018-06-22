 import React, { Component } from 'react';
 import './EditRecipe.css';

class EditRecipe extends Component {
  constructor() {
    super()
    this.state = {
      newTitle: '',
      newIngredients: '',
      id: null
    };
  };

  componentDidMount() {
    const { title, ingredients, id } = this.props;
    this.setState({ id, newTitle: title, newIngredients: ingredients });
  };

  handleToggle = event => {
    event.preventDefault()
    this.props.toggleEdit();
  }

  submitEdit = () => {
    const { editRecipe, toggleEdit  } = this.props;
    editRecipe(this.state);
    toggleEdit();
    this.setState({ newTitle: '', newIngredients: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { newTitle, newIngredients} = this.state;
    return (
      <section className='edit-form-container'>
        <input 
          className='edit-title'
          type='text'
          value={ newTitle }
          name='newTitle'
          onChange={ this.handleChange } />
        <textarea
          className='edit-new-ingredients'
          type='text'
          name='newIngredients' 
          onChange={ this.handleChange } />
        <button 
          className='submit-edit'
          onClick={ this.submitEdit }> Submit </button>
        <button 
          className='cancel-edit'
          onClick={ this.handleToggle }> Cancel Edit </button>
      </section>
    )
  };
};

export default EditRecipe;
