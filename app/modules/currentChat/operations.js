// import { setUser } from './actions';
import createChatFb from '../../services/firebase/database/createChat';
import { removeAllChat, setChat } from './actions';
import messagesStatus from '../../constants/messagesStatus';
import createMessage from '../../services/firebase/database/createMessage';

// import { ToastAndroid } from 'react-native';
// import types from './types';
// import appTypes from '../app/types';


const sendMessage = (text, idChat) => async (dispatch, getState) => {
  const { uid } = getState().authentication.currentUser;
  const { autor } = getState().chatList.chats[idChat].lastMessages;

  createMessage(
    idChat,
    text,
    messagesStatus.SENDING,
    uid,
    autor,
  ).then((idMessage) => {
    console.log('99999999999999999', idMessage);
  });

};

export default {
  sendMessage,
};
