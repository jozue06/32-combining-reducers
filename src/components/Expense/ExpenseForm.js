import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExpenseForm extends Component {

  state = {
    name:'',
    amount:'',
    categoryID: this.props.categoryID,
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ name: '', amount: ''});
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input name="name" value={this.state.name} onChange={this.changeHandler} type="text" placeholder="Expense"/>
        <input name="amount" value={this.state.amount} onChange={this.changeHandler} type="number" placeholder="Amount"/>

        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}