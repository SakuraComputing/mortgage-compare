import React from 'react';
import NumberFormat from 'react-number-format';

const QuoteList = (props) => (
    <div className="quote-list">
        <div className="quote-list__item">
              <span>Monthly Payment</span>
            <span className="quote-list__item__amount">
                <NumberFormat value={props.monthlyPayment} displayType={'text'} thousandSeparator={true} prefix={'£'} />
              </span>
        </div>
        <div className="quote-list__item">
            <div>Term in years</div>
            <div className="quote-list__item__amount">
                {props.term}
            </div>
        </div>
        <div className="quote-list__item">
            <div>Mortgage Amount</div>
            <div className="quote-list__item__amount">
                <NumberFormat value={props.mortgageAmount} displayType={'text'} thousandSeparator={true} prefix={'£'}/>
            </div>
        </div>
        <div className="quote-list__item">
            <div>Contribution</div>
            <div className="quote-list__item__amount">
                <NumberFormat value={props.initialContribution} displayType={'text'} thousandSeparator={true} prefix={'£'}/>
            </div>
        </div>
    </div>
);
export default QuoteList;