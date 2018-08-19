import React from 'react';
import S from '../components/styles/styles.js'
import Header from './Header'
import Footer from './Footer'
import { getCategory } from '../reducers/category';
import { connect } from 'react-redux';
import CategoryContainer from './Category/CategoryContainer';

class Dashboard extends React.Component{

 componentDidMount(){
    console.log('did mount')
   getCategory
    }
      
  render(){
  return (
    <main>
    <Header />
    <S.Wrapper>
      <CategoryContainer />
    </S.Wrapper>
    <Footer />
    </main>
  );
};
};

const mapDispatchToProps = (dispatch) => ({
  getCategory: dispatch(getCategory()),
 
});

export default connect(null, mapDispatchToProps)(Dashboard);