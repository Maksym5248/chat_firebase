import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { mergeIn } from '../../utils/stateHelpers';
import types from './types';

const initialStateUser = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  uid: null,
  accessToken: null,
  refreshToken: null,
};

const user = handleActions({
  [types.SET_USER]: mergeIn(action => action.payload),
}, initialStateUser);

const authenticationReducer = combineReducers({
  user,
});

export default authenticationReducer;
