import { connect } from 'react-redux';
import { compose, hoistStatics, withHandlers, withStateHandlers, withState, withProps } from 'recompose';
import ChatListScreen from './ChatListScreen';
import screens from '../../constants/screens';


const mapStateToProps = state => ({
  chatList: state.chatList.chats,
  chatsListId: state.chatList.chatsId,
  userCurrent: state.authentication.currentUser,
  userList: state.userList.users,
});

const enhance = compose(
  connect(mapStateToProps),
  withState('searchValue', 'setSearch', ''),
  withProps(({ searchValue, chatList, chatsListId, userList }) => ({
    chatsListId: chatsListId.filter((item) => {
      const expr = new RegExp(searchValue.toLowerCase());
      const idUser = chatList[item].lastMessages.chatWithUser;
      const name = userList[idUser].displayName;
      // console.log('----------------', expr, name);
      return expr.test(name.toLowerCase());
    }),
  })),
  withStateHandlers(
    ({ initialCounter = { isVisible: false, idChat: '' } }) => ({
      modal: initialCounter,
    }),
    {
      setUnVisible: () => () => ({
        modal: { isVisible: false, idChat: '' },
      }),
      itemOnLongPress: () => (id) =>

        ({
          modal: { isVisible: true, idChat: id },
        }),
      deleteChat: ({ modal }) => () =>
        // console.log('uid----------');
        // !!! Запит на видалення !!!!!!!!!!
        // modal.idChat
        ({
          modal: { isVisible: false, idChat: '' },
        })
      ,
    },
  ),
  withHandlers({
    moveToChat: ({ navigation }) => (id) => {
      navigation.navigate(screens.CurrentChat, { idChat: id });
    },
  }),
);

export default hoistStatics(enhance)(ChatListScreen);
