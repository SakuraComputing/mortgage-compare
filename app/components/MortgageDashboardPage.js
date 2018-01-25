import React from 'react';
import { connect } from 'react-redux';
import quoteData from '../data/mortgageQuote.json';
import MortgageContainer from './MortgageContainer';
import { setQuotes } from '../actions/quotes';

class MortgageDashboardPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const quotes = quoteData.quotes;
    this.props.setQuotes(quotes);
    this.setState(() => ({
        quotes: quotes
    }));
  }
  render() {
    return (
      <div>
        <MortgageContainer />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => ({
  setQuotes: (quotes) => dispatch(setQuotes(quotes))
});
const mapStateToProps = (state) => ({
  quotes: state.quotes
});
export default connect(mapStateToProps, mapDispatchToProps)(MortgageDashboardPage);
