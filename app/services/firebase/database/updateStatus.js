import ref from './ref';
import url from '../../../constants/url';


function updateStatus(idChat, messageId, statusMessage, authorId, messageRecipient) {
  console.log(`${url.userProfile}/${authorId}/chatList/${idChat}/lastMessages`, statusMessage);

  return Promise.all([ref(`${url.userProfile}/${authorId}/chatList/${idChat}/lastMessages`).update({ status: statusMessage }, (error) => {
    if (error) {
      console.log('Error updating data: 222', error);
    }
  }),
  ref(`${url.userProfile}/${messageRecipient}/chatList/${idChat}/lastMessages`).update({ status: statusMessage }, (error) => {
    if (error) {
      console.log('Error updating data: 333', error);
    }
  }),
  ref(`${url.chatList}/${idChat}/messages/${messageId}`).update({ status: statusMessage }, (error) => {
    if (error) {
      console.log('Error updating data: 111', error);
    }
  }),
  ]).catch((err) => {
    console.log('updateStatus', err);
  });
}

export default updateStatus;
