import React from 'react';
import CompareItem from './CompareItem';

export const CompareItemList = ( { comparisons } ) => (
  <div>
    <h3>Mortgage Comparisons</h3>

    <table className="mortgage-compare-list">
      <tbody>
      <tr>
        <th>Years Fixed</th>
        <th>Provider</th>
        <th>Term</th>
        <th>Monthly Payment</th>
        <th>Initial Contribution</th>
        <th>Mortgaga Total</th>
        <th>Select</th>
      </tr>
      {
        (comparisons.map((comparison) => {
          return <CompareItem key={comparison.id} {...comparison} />;
        }))
      }
      </tbody>
    </table>
  </div>
);

export default CompareItemList;
