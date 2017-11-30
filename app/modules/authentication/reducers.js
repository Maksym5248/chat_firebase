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

const currentUserReducer = handleActions({
  [types.SET_CURRENT_USER]: mergeIn(action => action.payload),
}, initialStateUser);

const authenticationReducer = combineReducers({
  currentUser: currentUserReducer,
});

export default authenticationReducer;
