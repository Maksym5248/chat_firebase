import { createActions } from 'redux-actions';
import types from './types';

export const { setChat, removeChat } = createActions({
  [types.SET_CHAT]: chat => chat,
  [types.REMOVE_CHAT]: chat => chat,
});
