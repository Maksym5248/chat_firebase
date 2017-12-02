// import { setUser } from './actions';
import createChatFb from '../../services/firebase/database/createChat';
import { addMessage, setChat } from './actions';
import messagesStatus from '../../constants/messagesStatus';
import createMessage from '../../services/firebase/database/createMessage';
import creatorMessages from '../../utils/creator/creatorMessages';

// import { ToastAndroid } from 'react-native';
// import types from './types';
// import appTypes from '../app/types';


const sendMessage = (text, idChat) => async (dispatch, getState) => {
  const { uid } = getState().authentication.currentUser;
  const messageRecipient = getState().chatList.chats[idChat].lastMessages.autor;
  const idInReducer = Date.now().valueOf().toString(36).substr(2, 9);
  // console.log('+++++++++++++++++idInReducer++++++++++++', idInReducer);
  const messageInChat = {
    chatId: idChat,
    messages: {
      [idInReducer]: creatorMessages(
        idInReducer,
        text,
        messagesStatus.SENDING,
        uid,
      ),
    },
  };

  dispatch(addMessage(messageInChat));

  createMessage(
    idChat,
    text,
    messagesStatus.DELIVERED,
    uid,
    messageRecipient,
  ).then((idMessage) => {
    // console.log('333333333333333333333333333', idMessage);
  });
};

export default {
  sendMessage,
};
