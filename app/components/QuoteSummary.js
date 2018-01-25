import React from 'react';
import NumberFormat from 'react-number-format';
import santander from '../assets/images/santander.svg.png';
import halifax from '../assets/images/halifax.png';
import nationwide from '../assets/images/nationwide.png';

const QuoteSummary = (props) => (
    <div className='quote-top-summary'>
        <div className={"quote-top-summary__text"}>
            We believe you can afford a property worth:
        </div>
        <div className={'quote-top-summary__logo'} >
            {props.provider === "santander" && <img src={santander} alt={santander} height="30" width='70' align="right" />}
            {props.provider === "halifax" && <img src={halifax} alt={halifax} height="30" width='50'align="right" />}
            {props.provider === "nationwide" && <img src={nationwide} alt={nationwide} height="30" width='50'align="right" />}
        </div>
        <div className="quote-top-summary__total" >
            <NumberFormat value={props.mortgageTotal} displayType={'text'} thousandSeparator={true} prefix={'£'}/>
        </div>
    </div>
);
export default QuoteSummary;