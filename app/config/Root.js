import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MortgageDashboard from '../components/MortgageDashboardPage';
import AddMortgageQuote from '../components/AddMortgageQuote';
import MortgageCompare from '../components/MortgageCompare';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={MortgageDashboard} />
          <Route path="/create" component={AddMortgageQuote}></Route>
          <Route path="/comparisons" component={MortgageCompare}></Route>
        </div>
      </Router>
    </Provider>
  );
};

export default Root;

