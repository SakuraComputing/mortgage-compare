import React from 'react';
import { shallow } from 'enzyme';
import AddMortgageQuote from '../../app/components/AddMortgageQuote';

describe('New Quote',() => {
  it('should render the form correctly', () => {
    const wrapper = shallow(<AddMortgageQuote />);
    expect(wrapper).toMatchSnapshot();
  });

});
