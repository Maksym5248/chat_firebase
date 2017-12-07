import ref from './ref';
import url from '../../../constants/url';


function chat(idChat, uid) {
  return Promise.resolve(ref(`${url.userProfile}/${uid}${url.chatList}/${idChat}`).remove());
}

function message(idChat, messagesId) {
  return Promise.resolve(ref(`${url.chatList}/${idChat}/messages/${messagesId}`).remove());
}

const remove = {
  chat,
  message,
};

export default remove;
