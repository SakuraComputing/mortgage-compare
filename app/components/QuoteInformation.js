import React from 'react';
import NumberFormat from 'react-number-format';

const QuoteInformation = (props) => (
  <div>
    <p>
      The above figures are based on a
      <span> <NumberFormat value={props.mortgageAmount} displayType={'text'} thousandSeparator={true} prefix={'£'} /> </span>

      mortgage and a fixed rate of 3.79%. This could rise to a variable rate (currently 3.74%)
      if you forget to switch, but we will keep an eye on it for you. If you kept this
      mortgage for the full {props.term} year term, the overall cost (including interest and fees)
      would be 3.9% APRC
    </p>
    <p></p>
    <p>
      Remember as well as your deposit and stamp duty, you'll need about £1,671 to cover the
      additional cost of buying a home.
    </p>
  </div>
);
export default QuoteInformation;
