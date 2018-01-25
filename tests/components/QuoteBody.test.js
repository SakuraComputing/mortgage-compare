import React from 'react';
import { shallow, configure } from 'enzyme';
import quotes from './../fixtures/quotes';

import QuoteBody from '../../app/components/QuoteBody';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<QuoteBody quotes={quotes[1]} />);
});

describe('Quote Body', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should toggle the favorite button on and off', () => {
      const state = { liked: false };
      wrapper.find('.quote-button-round.quote-button-favourite').simulate('click');
      expect(state).to
  });
});


