import React from 'react';

class NewMortgageQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lender: 'Santander'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          New Mortgage Lender
            <select value={this.state.lender} onChange={this.handleChange}>
              <option value="Halifax" icon="/assets/images/Halifax.png"></option>
              <option value="Santander" icon="/assets/images/santander.png"></option>
            </select>
            <button>Cancel</button>
        </label>
      </form>
    )
  }
};

export default NewMortgageQuote;
