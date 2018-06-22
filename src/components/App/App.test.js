import { shallow } from 'enzyme';
import App from '../App';
import React from 'react';
import Form from '../Form';

describe('App tests', () => {
  describe('App defaults', () => { 
    test('should have default state', () => {
      const renderedApp = shallow(<App />);
      const expectation = [];

      expect(renderedApp.state('recipes')).toEqual(expectation)
    });
  })
  describe('submitIdea / removeIdea tests', () => {
    test('when addRecipe is invoked it should add to the state', () => {
      const renderedApp = shallow(<App />);
      const expectation = [ expect.objectContaining({
        id: 1, 
        recipe: 'tacos' ,
        ingredients: 'moar tacos' }) ]

      renderedApp.instance().addRecipe({ id: 1, recipe: 'tacos', ingredients: 'moar tacos' });

      expect(renderedApp.state('recipes')).toEqual(expectation);
    });
    test('should removeRecipe when is invoked it should remove desired recipe', () => {
      const renderedApp = shallow(<App />); 
      const currentState = [ { id: 1, title: 'tacos', ingredients: 'moar tacos' }]
      const expectation = [];

      renderedApp.setState({ recipes: currentState })
      renderedApp.instance().removeRecipe(1);

      expect(renderedApp.state('recipes')).toEqual(expectation)
    })

    test('when editRecipe is invoked it should update desired rescipe in state', () => {
      const renderedApp = shallow(<App />); 
      const currentState = [ { id: 1, title: 'tacos', ingredients: 'moar tacos' }, 
                             { id:2, title: 'less tacos', ingredients: 'tears'} ];
      const expectation =  [ { id: 1, title: 'tacos', ingredients: 'moar tacos' }, 
                             { id:2, title: 'all tacos', ingredients: 'tacoss'} ];

      renderedApp.setState({ recipes: currentState });
      renderedApp.instance().editRecipe({ id: 2, newTitle: 'all tacos', newIngredients: 'tacoss' })

      expect(renderedApp.state('recipes')).toEqual(expectation)
    });
  });
})
