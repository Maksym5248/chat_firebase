import { createActions } from 'redux-actions';
import types from './types';

export const { setUser, setEmailAndPassword, setCredentialFacebook } = createActions({
  [types.SET_USER]: user => user,
  [types.SET_EMAIL_AND_PASSWORD]: emailAndPassword => emailAndPassword,
  [types.SET_CREDENTIAL_FACEBOOK]: credentialFacebook => credentialFacebook,
});
