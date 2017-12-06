import { setUserFromList } from './actions';
import createChatFb from '../../services/firebase/database/createChat';
import screens from '../../constants/screens';

// import { ToastAndroid } from 'react-native';
// import types from './types';
// import appTypes from '../app/types';


const createChat = (uidValue, navigation) => async (dispatch, getState) => {
  const { authentication, userList } = getState();

  return createChatFb(authentication.currentUser.uid, uidValue).then((id) => {
    const { displayName, photoURL } = userList.users[uidValue];
    navigation.navigate(screens.CurrentChat, {
      idChat: id,
      displayName,
      photoURL,
    });
  }).catch((err) => {
    console.log('err createChatFb', err);
  });
};


export default {
  createChat,
  setUserFromList,
};
