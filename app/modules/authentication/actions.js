import { createActions } from 'redux-actions';
import types from './types';

export const { setUser } = createActions({
  [types.SET_USER]: user => user,
});
