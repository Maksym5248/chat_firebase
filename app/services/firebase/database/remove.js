import ref from './ref';
import url from '../../../constants/url';


function chat(idChat, uid) {
  ref(`${url.userProfile}/${uid}${url.chatList}/${idChat}`).remove();
}

function message(idChat, messagesId) {
  ref(`${url.chatList}/${idChat}/messages/${messagesId}`).remove();
}

const remove = {
  chat,
  message,
};

export default remove;
