import ref from './ref';
import url from '../../../constants/url';
import creatorMessages from '../../../utils/creator/creatorMessages';
import creatorLastMessage from '../../../utils/creator/creatorLastMessage';

console.ignoredYellowBox = ['Setting a timer'];

const createMessage = (idChat, textMessage, statusMessage, authorId, messageRecipient) => {
  const messages = ref(`${url.chatList}/${idChat}/messages`);
  return new Promise((resolve, reject) => {
    const idMessage = messages.push().key; // ref(url.chatList).push().key
    if (idMessage) resolve(idMessage);
    reject('createChatFb don\'t have response');
  }).then((idMessage) => {
    const message = creatorMessages(idMessage, textMessage, statusMessage, authorId);
    messages.child(idMessage).set(message);
    console.log('-----createMessage-----');
    ref(`${url.userProfile}/${authorId}/chatList/${idChat}/lastMessages`).update(creatorLastMessage(message));
    ref(`${url.userProfile}/${messageRecipient}/chatList/${idChat}/lastMessages`).update(creatorLastMessage(message));
    return idMessage;
  });
};

export default createMessage;

// users.push(createUserToFb(user));


// let m = {
//   messages: {
//     messageId: {
//       autor: 'uid',
//       id: 'messageId',
//       read: 'bool',
//       text: 'eAGA',
//       time: 'adeG',
//     },
//   },
//   meta: {
//     isFetching: true,
//     lastFetched: false,
//   },
// };
// Додати собі у профіль ссилку на чат
// додати у чужий профіль ссилку на чат
// додати чат у список чатів
