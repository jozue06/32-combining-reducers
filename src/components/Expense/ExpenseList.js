import React from 'react';
import PropTypes from 'prop-types';

const ExpenseList = (props) => {
  return (
    <ul>
      {props.expenses.filter(expense => expense.categoryID === props.id ).map(expense => <li key={expense.id}>Expense:{expense.name} 
      <br />
      Expense Amount: {expense.amount}</li>)}
    </ul>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default ExpenseList;

