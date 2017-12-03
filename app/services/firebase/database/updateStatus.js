import ref from './ref';
import url from '../../../constants/url';


function updateStatus(idChat, messageId, statusMessage, authorId, messageRecipient) {
  ref(`${url.chatList}/${idChat}/messages/${messageId}`).update({ status: statusMessage });
  ref(`${url.userProfile}/${authorId}/chatList/${idChat}/lastMessages`).update({ status: statusMessage });
  ref(`${url.userProfile}/${messageRecipient}/chatList/${idChat}/lastMessages`).update({ status: statusMessage });
}

export default updateStatus;
