import React from 'react';
import PropTypes from 'prop-types';

const CategoryList = (props) => {
  return (
    <ul>
      {props.categories.map(Category => <li key={Category.id}>{Category.name}</li>)}
    </ul>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CategoryList;