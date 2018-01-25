import React from 'react';
import { connect } from 'react-redux';
import QuoteBody from './../components/QuoteBody';

export class MortgageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.state = {
      firstVisibleQuote: 1,
    };
  }

  componentDidMount() {
    this.setState(() => ({
      quotes: this.props.quotes
    }));
  }

  handleLeftClick() {
    if(this.state.firstVisibleQuote > 1) {
      this.setState({
        firstVisibleQuote: this.state.firstVisibleQuote - 1
      });
    }
  }

  handleRightClick() {
    if(this.state.firstVisibleQuote > 0 && this.state.firstVisibleQuote + 2 < this.props.quotes.length) {
      this.setState({
        firstVisibleQuote: this.state.firstVisibleQuote + 1
      });
    }
  }

  render() {
    return (
      <div>
        <span className="quote-container">
          <button className="quote-button-round quote-button-left" onClick={this.handleLeftClick}>&#8249;</button>
          {
            (this.props.quotes.slice((this.state.firstVisibleQuote - 1), (this.state.firstVisibleQuote + 2)).map((quote) => {
              if(quote.id >= this.state.firstVisibleQuote) {
                return <QuoteBody key={quote.id} {...quote} />;
              }
            }))
          }
          <button className="quote-button-round quote-button-right" onClick={this.handleRightClick}>&#8250;</button>
        </span>
      </div>
    )
  }
};
const mapStateToProps = (state) => ({
  quotes: state.quotes
});
export default connect(mapStateToProps, undefined)(MortgageContainer)


