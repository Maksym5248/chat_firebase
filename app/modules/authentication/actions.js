import { createActions } from 'redux-actions';
import types from './types';

export const { setCurrentUser } = createActions({
  [types.SET_CURRENT_USER]: user => user,
});
