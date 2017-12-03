import { connect } from 'react-redux';
import { compose, hoistStatics, lifecycle, withHandlers, withStateHandlers } from 'recompose';
import { withLoadingModal } from '../../utils/enhancers';
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
  lifecycle({
    componentWillReceiveProps(nextProps) {
      // console.log('ChatListScreen componentWillReceiveProps state ===========', nextProps.chats, nextProps.chatsId);
    },
    componentDidMount() {
      // console.log('userList-----------------', this.props.userList);
    },
  }),
);

export default hoistStatics(enhance)(ChatListScreen);
