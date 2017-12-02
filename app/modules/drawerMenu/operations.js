import { initialized } from '../app/actions';
import { setCurrentUser } from '../authentication/actions';
import signOut from '../../services/firebase/autorize/signOut';
import createUser from '../../services/firebase/autorize/createUser';
import url from '../../constants/url';
import { chatListOperations } from '../../modules/chatList';
import { userListOperations } from '../../modules/usersList';
import { setUnloading, setLoading } from './actions';
import subscribe from '../../services/firebase/database/subscribe';
import { setCurrentChat } from '../currentChat/actions';

const { setUserFromList } = userListOperations;
const { setChat, removeAllChat } = chatListOperations;


const logOut = () => async dispatch => {
  signOut().then(() => {
    console.log('Sign-out successful.');
    dispatch(setLoading());
    dispatch(initialized(null));
    dispatch(setCurrentUser(createUser()));
    dispatch(removeAllChat());

  }).catch((err) => {
    console.log('logOut error .', err);
  });
};

const subscribeToAll = () => async (dispatch, getState) => {
  const { authentication } = getState();
  const userProfileUrlChatList = `${url.userProfile}/${authentication.currentUser.uid}/chatList`;

  subscribe.value(
    url.users,
    (data) => {
      // console.log('-----   V - A - L - U - E   -----', data);
      if (data.exists()) {
        data.forEach((childSnapshot) => {
          const item = childSnapshot.val();
          dispatch(setUserFromList(item));
        });
      }
    },
    error,
  );

  subscribe.value(
    userProfileUrlChatList,
    (data) => {
      dispatch(setUnloading());
      // console.log('-----   V - A - L - U - E   -----', data);
      if (data.exists()) {
        data.forEach((childSnapshot) => {
          const item = childSnapshot.val();
          subscribeToCurrentChat(item.idChat);
          dispatch(setChat(item));
        });
      }
    },
    error,
  );
  // typeof m = 'undefined'
  function subscribeToCurrentChat(id) {
    subscribe.value(
      `${url.chatList}/${id}`,
      (data) => {
        console.log('-----   V - A - L - U - E   -----', data);
        const currenChat = data.val();
        if (data.exists() && typeof currenChat.messages !== 'undefined') {
          dispatch(setCurrentChat(currenChat));
        }
      },
      error,
    );
  }
};

  // subscribe.addedd(userProfileUrlChatList, (data, resolve, reject) => {
  //   callBack(data, dispatch);
  //   resolve(data);
  // })
  //   .then((res) => {
  //     dispatch(setUnloading());
  //     console.log('res---userProfileUrlChatList---------------', res);
  //   })
  //   .catch((err) => {
  //     dispatch(setUnloading());
  //     console.log('res---userProfileUrlChatList---------------', err);
  //   });


  // chatList
  // subscribe.added(
  //   userProfileUrlChatList,
  //   (data) => dispatch(setChat(createObjectInChat(null, null, data))),
  //   error,
  // );
  //
  // subscribe.changed(
  //   userProfileUrlChatList,
  //   (data) => dispatch(setChat(createObjectInChat(null, null, data))),
  //   error,
  // );

// subscribe.added(
//   url.users,
//   (data) => dispatch(setUserFromList(createUserToFb(data, true))),
//   error,
// );
// subscribe.changed(
//   url.users,
//   (data) => dispatch(setUserFromList(createUserToFb(data, true))),
//   error,
// );
// subscribe.removed(url.users, (data) => {
//   // console.log('users removed ---------------   data', data);
// });


function error(err) {
  console.log('failureCallbackOrContext----------', err);
}

export default {
  logOut,
  subscribeToAll,
};

