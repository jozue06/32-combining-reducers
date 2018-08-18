import React from 'react';
import PropTypes from 'prop-types';

const ExpenseList = (props) => {
  return (
    <ul>
      {props.expenses.map(expense => <li key={expense.id}>{expense.name}</li>)}
    </ul>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default ExpenseList;