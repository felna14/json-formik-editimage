import { combineReducers } from '@reduxjs/toolkit';

const dummy = () => '';

const initialState = { data: [], editData: {}, viewData: {} };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return { ...state, data: action.payload };
    case 'EDIT_USER':
      return { ...state, editData: action.payload };
    case 'VIEW_USER':
      return { ...state, viewData: action.payload };
    default:
      return state;
  }
};
export default combineReducers({ dummy, postReducer });
