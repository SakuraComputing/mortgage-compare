import React from 'react';
import { shallow, configure } from 'enzyme';
import MortgageDasboardPage from '../../app/components/MortgageDashboardPage';

describe('Mortagage Dashboard Page', () => {
  it('should render the page correctly', () => {
    const wrapper = shallow(<MortgageDasboardPage />);
    expect(wrapper).toMatchSnapshot();
  })
});

