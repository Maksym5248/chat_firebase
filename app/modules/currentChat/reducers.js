import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { mergeIn } from '../../utils/stateHelpers';
import types from './types';

// const initialCurrentChats = {
//   chatId: 'string',
//   lastMessages: {
//     autor: 'id',
//     date: 1511943565859,
//     text: 'Немає повідомлень',
//   },
// };

const initialCurrentChats = {};
const initialStateChatId = [];

const currentChatsReducer = handleActions({
  [types.SET_CURRENT_CHAT]: mergeIn((action, state) => ({
    ...state,
    [action.payload.chatId]: {
      ...action.payload,
    },
  })),
  [types.REMOVE_CURRENT_CHAT]: mergeIn((action, state) => ({
    ...state,
    [action.payload.chatId]: null,
  })),
  [types.REMOVE_All_CURRENT_CHATS]: () => initialCurrentChats,
}, initialCurrentChats);


const messagesIdReducer = (state = initialStateChatId, action) => {
  if (action.type === types.SET_CURRENT_CHAT) {
    // console.log('action+++++++++++++++++++++++++++++++++++', action.payload);
  }
  switch (action.type) {
    case types.SET_CURRENT_CHAT:
      // const arr = [...state];
      const messages = Object.keys(action.payload.messages);

      return {
        ...state,
        [action.payload.chatId]: messages,
      };
    case types.REMOVE_All_CURRENT_CHATS:
      return initialStateChatId;
    default:
      return state;
  }
};

const currentChatListReducer = combineReducers({
  currentChat: currentChatsReducer,
  messagesId: messagesIdReducer,
});

export default currentChatListReducer;
