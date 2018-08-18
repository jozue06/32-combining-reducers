import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategoryForm extends Component {

  state = {
    name:'',
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ name: ''});
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input name="name" value={this.state.name} onChange={this.changeHandler} type="text" placholder="category"/>
        <input name="budget" value={this.state.buget} onChange={this.changeHandler} type="number" placholder="budget"/>

        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}