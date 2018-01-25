import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addQuote } from '../actions/quotes'

export class compareItem extends React.Component {
    constructor(props) {
      super(props);
      this.addComparisonQuote = this.addComparisonQuote.bind(this);
    }

    addComparisonQuote() {
        this.props.addQuote(
          {
            id: this.props.id,
            fixed: this.props.fixed,
            provider: this.props.provider,
            term: this.props.term,
            monthlyPayment: this.props.monthlyPayment,
            mortgageAmount: this.props.mortgageAmount,
            initialContribution: this.props.initialContribution,
            mortgageTotal: this.props.mortgageTotal
          });
    }

    render() {
        return (
            <tr className="tableList">
                <td>{this.props.fixed}</td>
                <td>{this.props.provider}</td>
                <td>{this.props.term}</td>
                <td>{this.props.monthlyPayment}</td>
                <td>{this.props.initialContribution}</td>
                <td>{this.props.mortgageTotal}</td>
                <td>
                  <Link onClick={this.addComparisonQuote} to="/" >Add Quote</Link>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  addQuote: (quote) => dispatch(addQuote(quote))
});
const mapStateToProps = (state) => ({
  quotes: state.quotes
});
export default connect(mapStateToProps, mapDispatchToProps)(compareItem);
