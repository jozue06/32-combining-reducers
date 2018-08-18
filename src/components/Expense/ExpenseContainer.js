import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../../reducers/expense';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpenseContainer = (props) => {
  return (
    <section>
      <h2>Expenses</h2>
    <ExpenseForm buttonText="add sweet" onComplete={props.addExpense} />
    <ExpenseList expenses={props.expenses} />
    </section>
  );
};

const mapStateToProps = (state) => ({ expenses : state.expenseState.expenses });
const mapDispatchToProps = { addExpense };
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseContainer);