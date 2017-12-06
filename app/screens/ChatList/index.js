import { connect } from 'react-redux';
import { compose, hoistStatics, withHandlers, withState, withProps } from 'recompose';
import ChatListScreen from './ChatListScreen';
import screens from '../../constants/screens';
import remove from '../../services/firebase/database/remove';


const mapStateToProps = state => ({
  chatList: state.chatList.chats,
  chatsListId: state.chatList.chatsId,
  userCurrent: state.authentication.currentUser,
  userList: state.userList.users,
});

const enhance = compose(
  connect(mapStateToProps),
  withState('searchValue', 'setSearch', ''),
  withState('idChat', 'setIdChat', null),
  withProps(({
    searchValue, chatList, chatsListId, userList,
  }) => ({
    chatsListId: chatsListId.filter((item) => {

      const expr = new RegExp(searchValue.toLowerCase());
      const idUser = chatList[item].lastMessages.chatWithUser;
      const name = userList[idUser].displayName;

      return expr.test(name.toLowerCase());
    }),
  })),
  withHandlers({
    moveToChat: ({ navigation, chatList, userList }) => (id) => {
      const userId = chatList[id].lastMessages.chatWithUser;
      if (userList[userId]) {
        const { displayName, photoURL } = userList[userId];
        navigation.navigate(screens.CurrentChat, {
          idChat: id,
          displayName,
          photoURL,
        });
      }
    },
    deleteChat: ({ setIdChat, idChat, userCurrent }) => () => {
      remove.chat(idChat, userCurrent.uid);
      setIdChat(null);
    },
  }),
);

export default hoistStatics(enhance)(ChatListScreen);
