import superagent from 'superagent';
import uuid from 'uuid/v1';
import defaultState from './defaultState';

// Action type
export const GET = 'Category/GET'
export const ADD = 'Category/ADD';
export const DELETE = 'Category/DELETE';

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
      case DELETE:
      return {
        ...state,
        categories: state.categories.filter(category => {
          console.log('payss', payload)
          return category.id !== payload.id})
      };

      case GET:
      console.log('action reducer get', state)
      return ({
        ...state,
       categories: [...state.categories, action.payload]
      });
      
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

export function deleteCategory(category) {
  return {
    type: DELETE,
    payload: category
  }
}

export const getCategory = () => dispatch => {
console.log('calling getCat')
  superagent
  .get('http://localhost:3300/api/categories')
  .then(res =>
  dispatch({
    type: GET,
    payload: res.body
  }))

}