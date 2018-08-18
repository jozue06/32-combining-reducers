import uuid from 'uuid/v1';
import defaultState from './defaultState';

// Actions
export const ADD = 'Expense/ADD';

// Reducer
export default function reducer(state = defaultState, action) {

  const { type, payload } = action;

  switch (type) {
    case ADD:
      payload.id = uuid(); // this ok or need fresh copy?

      return {
        ...state,
        expenses: [...state.expenses, payload]
      };

    default: return state;
  }
}

// Action Creators
export function addExpense(expense) {
  return {
    type: ADD,
    payload: expense
  }
}