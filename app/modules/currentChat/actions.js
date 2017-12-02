import { createActions } from 'redux-actions';
import types from './types';

export const {
  setCurrentChat,
  removeCurrentChat,
  createMessage,
  removeAllCurrentChats,
} = createActions(
  {
    [types.SET_CURRENT_CHAT]: chat => chat,
    [types.REMOVE_CURRENT_CHAT]: chat => chat,
    [types.ADD_MESSAGE]: chat => chat,
  },
  types.REMOVE_All_CURRENT_CHATS,
);
