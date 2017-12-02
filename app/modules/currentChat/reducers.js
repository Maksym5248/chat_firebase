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
  [types.ADD_MESSAGE]: mergeIn((action, state) => ({
    ...state,
    [action.payload.chatId]: {
      chatId: action.payload.chatId,
      messages: {
        ...state[action.payload.chatId].messages,
        ...action.payload.messages,
      },
    },
  })),
  [types.REMOVE_CURRENT_CHAT]: mergeIn((action, state) => ({
    ...state,
    [action.payload.chatId]: null,
  })),
  [types.REMOVE_All_CURRENT_CHATS]: () => initialCurrentChats,
}, initialCurrentChats);


const messagesIdReducer = (state = initialStateChatId, action) => {

  switch (action.type) {
    case types.SET_CURRENT_CHAT:
      // const arr = [...state];
      const messages = Object.keys(action.payload.messages);
      return {
        ...state,
        [action.payload.chatId]: messages.reverse(),
      };
    case types.ADD_MESSAGE:
      console.log('action.payload.messages,', action.payload)
      const arrChat = [...state[action.payload.chatId]];
      // console.log('action+++++++++++++++++++++++++++++++++++', arrChat);
      const key = Object.keys(action.payload.messages);
      const arr = [...state[action.payload.chatId]];
      arr.unshift(key[0]);
      // arrChat.unshift(action.payload.messages[0].id);
      // const arr = [...state];
      return {
        ...state,
        [action.payload.chatId]: arr,
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
