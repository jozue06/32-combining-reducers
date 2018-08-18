import React, { Fragment } from 'react';
import ExpenseContainer from './Expense/ExpenseContainer';
import CategoryContainer from './Category/CategoryContainer';

const Dashboard = () => {
  return (
    <Fragment>
      <CategoryContainer />
      <ExpenseContainer />
    </Fragment>
  );
};

export default Dashboard;