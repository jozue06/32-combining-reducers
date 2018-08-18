import React, { Fragment } from 'react';
import S from '../style/styles'

import CategoryContainer from './Category/CategoryContainer';

const Dashboard = () => {
  return (
    <S.Wrapper>
      <CategoryContainer />
    </S.Wrapper>
  );
};

export default Dashboard;