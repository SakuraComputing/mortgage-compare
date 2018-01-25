import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import QuoteInformation from './QuoteInformation';
import QuoteSummary from './QuoteSummary';
import QuoteList from './QuoteList';

export default class QuoteBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};
    this.handleFavouriteClick = this.handleFavouriteClick.bind(this);
  }

  handleFavouriteClick() {
    this.setState(
      { liked: !this.state.liked }
    );
  }

  render() {
    return (
      <div className="quote-body">
        {this.props.fixed === 2 && <div className="quote-header-2">{this.props.fixed} years fixed</div>}
        {this.props.fixed === 5 && <div className="quote-header-5">{this.props.fixed} years fixed</div>}
        <div className="quote-main">
          <div>
            <button
              to="/comparisons"
              className="quote-button-round quote-button-add-remove"
              align="right">
              <NavLink to="/comparisons" activeClassName="is-active">+</NavLink
            >
            </button>
          </div>
          <div>
            <button
              onClick={this.handleFavouriteClick}
              className=" quote-button-round quote-button-favourite">
              {this.state.liked ? '♥' : '♡' }
            </button>
          </div>
          <QuoteSummary provider={this.props.provider} mortgageTotal={this.props.mortgageTotal} />
          <QuoteList
              monthlyPayment={this.props.monthlyPayment}
              term={this.props.term}
              mortgageAmount={this.props.mortgageAmount}
              initialContribution={this.props.initialContribution}
          />
          <QuoteInformation mortgageAmount={this.props.mortgageAmount} term={this.props.term} />
        </div>
        {/*needs CSS refactoring*/}
        {this.props.fixed === 2 && <button className="quote-button-2">SIGN UP</button>}
        {this.props.fixed === 5 && <button className="quote-button-5">SIGN UP</button>}
      </div>
    );
  }
}

