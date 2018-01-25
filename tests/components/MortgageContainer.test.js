import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MortgageContainer from '../../app/components/MortgageContainer';

// configure({ adapter: new Adapter() });

describe('Mortgage Container', () => {
  it('should render correctly', () => {
    const quotes = {
      provider: 'Abbey',
      monthlyPayment: 1000,
      mortgageAmount: 203,
      initialContribution: 100,
      mortgageTotal: 20000,
    };

    // const wrapper = shallow(<MortgageContainer quotes={quotes} />);
    // expect(wrapper).toMatchSnapshot();
  });
});
