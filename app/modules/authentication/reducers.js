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
const initialStateEmailAndPassword = {
  email: null,
  password: null,
};

const initialStateCredentialFacebook = {
  accessToken: null,
  providerId: null,
};

const user = handleActions({
  [types.SET_USER]: mergeIn(action => action.payload),
}, initialStateUser);

const emailAndPassword = handleActions({
  [types.SET_EMAIL_AND_PASSWORD]: mergeIn(action => action.payload),
}, initialStateEmailAndPassword);

const credentialFacebook = handleActions({
  [types.SET_CREDENTIAL_FACEBOOK]: mergeIn(action => action.payload),
}, initialStateCredentialFacebook);


const authenticationReducer = combineReducers({
  user,
  emailAndPassword,
  credentialFacebook,
});

export default authenticationReducer;
