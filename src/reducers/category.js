
import uuid from 'uuid/v1';
import defaultState from './defaultState';

// Action type
export const ADD = 'Category/ADD';

// Reducer
export default function reducer(state = defaultState, action) {

  console.log({action});
  
  const { type, payload } = action;

  switch (type) {
    case ADD:
      payload.id = uuid(); // this ok or need fresh copy?
      return {
        ...state,
        categories: [...state.categories, payload]
      };

    default: return state;
  }
}

// Action Creators
export function addCategory(category) {
  console.log('addCategory action', category);
  return {
    type: ADD,
    payload: category
  }
}