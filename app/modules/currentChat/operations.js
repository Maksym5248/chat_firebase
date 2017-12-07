// import { setUser } from './actions';
import { addMessage } from './actions';
import messagesStatus from '../../constants/messagesStatus';
import createMessage from '../../services/firebase/database/createMessage';
import creatorMessages from '../../utils/creator/creatorMessages';
import updateStatus from '../../services/firebase/database/updateStatus';
import updateMetaFB from '../../services/firebase/database/updateMetaFB';

// import { ToastAndroid } from 'react-native';
// import types from './types';
// import appTypes from '../app/types';
let timer;

const updateMeta = (idChat, uid) => async () => {
  clearTimeout(timer);
  timer = setInterval(() => {
    updateMetaFB(idChat, fetchingNull(uid));
  }, 3000);
  return updateMetaFB(idChat, {
    isFetching: {
      [uid]: uid,
    },
  });
};


const updateStatusToRead = (idChat, messageId) => async (dispatch, getState) => {
  const { uid } = getState().authentication.currentUser;
  const messageRecipient = getState().chatList.chats[idChat].lastMessages.chatWithUser;
    console.log('++++++++++++++++++++++++++++++++++++', idChat,
      messageId,
      messagesStatus.READ,
      uid,
      messageRecipient);

  updateStatus(
    idChat,
    messageId,
    messagesStatus.READ,
    uid,
    messageRecipient,
  );
};

const sendMessage = (text, idChat) => async (dispatch, getState) => {
  const { uid } = getState().authentication.currentUser;
  const messageRecipient = getState().chatList.chats[idChat].lastMessages.chatWithUser;
  const chat = getState().currentChatList.currentChat;
  const idInReducer = Date.now().valueOf().toString(36).substr(2, 9);


  // if (typeof chat[idChat] !== 'undefined') {
  //   const messageInChat = {
  //     chatId: idChat,
  //     messages: {
  //       [idInReducer]: creatorMessages(
  //         idInReducer,
  //         text,
  //         messagesStatus.SENDING,
  //         uid,
  //       ),
  //     },
  //   };
  //   dispatch(addMessage(messageInChat));
  // }

  return createMessage(
    idChat,
    text,
    messagesStatus.DELIVERED,
    uid,
    messageRecipient,
  ).then((idMessage) => {
    // console.log('---------------idMessage---------------', idMessage);
  }).catch((err) => {
    console.log('error----sendMessage---catch----', err);
    if (typeof chat[idChat] !== 'undefined') {
      const messageInChat = {
        chatId: idChat,
        messages: {
          [idInReducer]: creatorMessages(
            idInReducer,
            text,
            messagesStatus.NOTSEND,
            uid,
          ),
        },
      };
      dispatch(addMessage(messageInChat));
    }
  });
};

function fetchingNull(uid) {
  return {
    isFetching: {
      [uid]: null,
    },
  };
}

export default {
  sendMessage,
  updateStatusToRead,
  updateMeta,
};
