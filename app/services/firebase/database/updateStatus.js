import ref from './ref';
import url from '../../../constants/url';


function updateStatus(idChat, messageId, statusMessage, authorId, messageRecipient) {
  console.log(`${url.chatList}/${idChat}/messages/${messageId}`, statusMessage);
  console.log(`${url.userProfile}/${authorId}/chatList/${idChat}/lastMessages`, statusMessage);
  console.log(`${url.userProfile}/${messageRecipient}/chatList/${idChat}/lastMessages`, statusMessage);

  ref(`${url.chatList}/${idChat}/messages/${messageId}`).update({ status: statusMessage }, (error) => {
    if (error) {
      console.log('Error updating data: 111', error);
    }
  });
  ref(`${url.userProfile}/${authorId}/chatList/${idChat}/lastMessages`).update({ status: statusMessage }, (error) => {
    if (error) {
      console.log('Error updating data: 222', error);
    }
  });
  ref(`${url.userProfile}/${messageRecipient}/chatList/${idChat}/lastMessages`).update({ status: statusMessage }, (error) => {
    if (error) {
      console.log('Error updating data: 333', error);
    }
  });
}

export default updateStatus;
