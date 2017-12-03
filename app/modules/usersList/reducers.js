import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { mergeIn } from '../../utils/stateHelpers';
import types from './types';

const initialStateUser = {};
const initialStateUserId = [];

const usersReducer = handleActions({
  [types.SET_USER_FROM_LIST]: mergeIn((action, state) => ({
    ...state.users,
    [action.payload.uid]: {
      ...action.payload,
    },
  })),

  [types.REMOVE_USER]: mergeIn((action, state) => ({
    ...state,
    [action.payload.uid]: null,
  })),
}, initialStateUser);


const usersIdReducer = (state = initialStateUserId, action) => {
  if (action.type === types.SET_USER_FROM_LIST) {
    // console.log('SET_USER +++++++++++++++++++++++++++++++++++', action.payload);
  }
  switch (action.type) {
    case types.SET_USER_FROM_LIST:
      const arr = [...state];
      if ([...state].indexOf(action.payload.uid.toString()) === -1) {
        arr.push(action.payload.uid);
      }
      return arr;
    default:
      return state;
  }
};

// const usersIdReducer = handleActions({
//   // console.log('----------------------- actions', action);
//
//   [types.ADD_USER]: (action, state) => {
//     console.log('----------------------- usersIdReducer actions', action.toString());
//     let arr = [...state];
//
//     if ([...state].indexOf(action.payload.uid.toString()) === -1) {
//       arr.push(action.payload.uid);
//     }
//
//     return arr;
//   },
// }, initialStateUserId);


// !!!!!!!--------замінити null на реальне видалення


const userListReducer = combineReducers({
  users: usersReducer,
  usersId: usersIdReducer,
});

export default userListReducer;
