import { createActions } from 'redux-actions';
import types from './types';

export const { setUser, removeUser } = createActions({
  [types.SET_USER]: user => user,
  [types.REMOVE_USER]: user => user,
});
