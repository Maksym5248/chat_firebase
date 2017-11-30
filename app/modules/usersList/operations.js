import { setUser } from './actions';
import createChatFb from '../../services/firebase/database/createChat';

// import { ToastAndroid } from 'react-native';
// import types from './types';
// import appTypes from '../app/types';


const createChat = (idCurrentUser, idUser) => async dispatch => createChatFb(idCurrentUser, idUser);


export default {
  createChat,
  setUser,
};
