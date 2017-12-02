import ref from './ref';
import url from '../../../constants/url';


function updateStatus(idChat, messageId, status) {
  ref(`${url.chatList}/${idChat}/messages/${messageId}/status`).update(status);
}

export default updateStatus;
