import { createActions } from 'redux-actions';
import types from './types';

export const { setUserFromList, removeUser } = createActions({
  [types.SET_USER_FROM_LIST]: user => user,
  [types.REMOVE_USER]: user => user,
});
