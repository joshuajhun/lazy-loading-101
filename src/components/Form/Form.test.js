import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';

describe('Form tests', () => {
  describe('Default state', () => {
    it('Form should have a default state of empty strings', () => {
      const renderedForm = shallow(<Form />);
      const expectation = { title: '', ingredients: '' };
      expect(renderedForm.state()).toEqual(expectation)
    })
  })
  describe('State Change', () => {
    it('should change state correctly when handleChange is invoked', () => {
      const renderedForm = shallow(<Form />);
      const expectation = { title: 'some title', ingredients: 'some ingredients' };

      renderedForm.instance().handleChange({ target: { value: 'some title', name: 'title' }})
      renderedForm.instance().handleChange({ target: { value: 'some ingredients', name: 'ingredients' }})

      expect(renderedForm.state()).toEqual(expectation);
    })

    it('should allow me to submit a recipe', () => {
      const mockEvent = jest.fn();
      const mockPropFunc = jest.fn();
      const renderedForm = shallow(<Form addRecipe={ mockPropFunc } />);
      const expectedPropArguments = {
                                      id: expect.any(Number), 
                                      title: 'some title' ,
                                      ingredients: 'some ingredients' 
                                    }
      
      renderedForm.setState({ title: 'some title', ingredients: 'some ingredients' })
      renderedForm.instance().submitRecipeToApp({ preventDefault: mockEvent })
      
      expect(mockPropFunc).toHaveBeenCalledWith(expectedPropArguments);
    });
  });
  describe('Form UI tests', () => {
    test('Form should render correct form inputs', () =>  {
      const renderedForm = shallow(<Form />);
      const expectedFormLength = 1;
      const actualFormLength = renderedForm.find('form').length;
      
      const expectedInputLength = 2
      const actualInputLength = renderedForm.find('[type="text"]').length;

      const expectedTextAreaLength = 1
      const expectedSubmitButtonLength = 1;
      const actualSubmitButtonLength = renderedForm.find('[type="submit"]').length;

      expect(actualFormLength).toBe(expectedFormLength);
      expect(actualInputLength).toBe(expectedInputLength);
      expect(actualSubmitButtonLength).toBe(expectedSubmitButtonLength);
    });
  });
});
