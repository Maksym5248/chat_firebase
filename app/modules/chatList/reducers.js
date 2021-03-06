import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { mergeIn } from '../../utils/stateHelpers';
import types from './types';

const initialStateChat = {
  chatId: 'string',
  lastMessages: { // review
    author: 'id',
    date: 1511943565859,
    text: 'Немає повідомлень',
  },
};

const initialStateChatId = [];

const chatsReducer = handleActions({
  [types.SET_CHAT]: mergeIn((action, state) => ({
    ...state.chats,
    [action.payload.idChat]: {
      ...action.payload,
    },
  })),
  [types.REMOVE_CHAT]: mergeIn((action, state) => ({
    ...state,
    [action.payload.idChat]: null,
  })),
  [types.REMOVE_All_CHAT]: () => initialStateChat,
}, initialStateChat);


const chatsIdReducer = (state = initialStateChatId, action) => {
  if (action.type === types.SET_CHAT) {
    // console.log('action+++++++++++++++++++++++++++++++++++', action.payload);
  }

  switch (action.type) {
    case types.SET_CHAT:
      const arr = [...state];
      if (action.payload.idChat && [...state].indexOf(action.payload.idChat.toString()) === -1) {
        arr.push(action.payload.idChat);
      }
      return arr.reverse();
    case types.REMOVE_CHAT:
      const array = [...state];

      if (action.payload.idChat) {
        const index = [...state].indexOf(action.payload.idChat.toString());
        array.splice(index, 1);
      }

      return array;
    case types.REMOVE_All_CHAT:
      return initialStateChatId;
    default:
      return state;
  }
};

const chatListReducer = combineReducers({
  chats: chatsReducer,
  chatsId: chatsIdReducer,
});

export default chatListReducer;
