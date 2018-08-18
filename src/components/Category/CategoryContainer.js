import React from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../../reducers/category';

import CategoryForm from './CategoryFrom';
import CategoryList from './CategoryList';

const CategoryContainer = (props) => {
  return (
    <section>
      <h2>Category</h2>
      <CategoryForm buttonText="add Category" onComplete={props.addCategory} />
      <CategoryList categories={props.categories} />
    </section>
  );
};

const mapStateToProps = (state) => ({ categories : state.categoryState.categories });
const mapDispatchToProps = dispatch => {
  return {
    addCategory: Category => {
      const action = addCategory(Category);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);