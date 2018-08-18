import React from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from '../Expense/ExpenseForm';
import ExpenseList from '../Expense/ExpenseList';

import { connect } from 'react-redux';
import { addExpense } from '../../reducers/expense';

const CategoryList = (props) => {
  return (
    <ul>
      {props.categories.map(Category => <li key={Category.id}>{Category.name}
        <ExpenseForm  buttonText="add expense" onComplete={props.addExpense}/> 
        <ExpenseList expenses={props.expenses}  /></li>)}
      
    </ul>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
}


const mapStateToProps = (state) => ({ expenses : state.expenseState.expenses });
const mapDispatchToProps = { addExpense };
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);