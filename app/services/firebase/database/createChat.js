import ref from './ref';
import url from '../../../constants/url';
import createObjectInChat from '../../../utils/creator/createObjectInChat';

console.ignoredYellowBox = ['Setting a timer'];

const createChatFb = (idCurrentUser, idUser) => (
  new Promise((resolve, reject) => {
    const response = ref(url.chatList).push(); // ref(url.chatList).push().key

    if (response) resolve(response);
    reject('createChatFb don\'t have response');
  }).then((response) => {
    const arrResponse = response.toString().split('/'); // response.key - отримати ключ
    const id = arrResponse[arrResponse.length - 1];
    return response.set({ chatId: id }).then(() => id);
  }).then((id) => {
    const urlCurrenUserProfile = ref(`${url.userProfile}/${idCurrentUser}/chatList/${id}`);
    return urlCurrenUserProfile.set(createObjectInChat(id, idUser)).then(() => id);
  }).then((id) => {
    const urlUserProfile = ref(`${url.userProfile}/${idUser}/chatList/${id}`);
    return urlUserProfile.set(createObjectInChat(id, idCurrentUser)).then(() => id);
  })
);

export default createChatFb;

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
