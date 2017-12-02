import { connect } from 'react-redux';
import { compose, hoistStatics, withState, lifecycle, withStateHandlers, withHandlers, withProps } from 'recompose';
import CurrentChatScreen from './CurrentChatScreen';
import { currentChatOperations } from '../../modules/currentChat';
import updateStatus from '../../services/firebase/database/updateStatus';
import messagesStatus from '../../constants/messagesStatus';

const { sendMessage } = currentChatOperations;

const mapStateToProps = state => ({
  currentChats: state.currentChatList.currentChat,
  messagesId: state.currentChatList.messagesId,
  userList: state.userList.users,
  userCurrent: state.authentication.currentUser,
});

const enhance = compose(
  connect(mapStateToProps),
  withState('text', 'setText', ''),
  withProps(({ currentChats, messagesId, navigation }) => ({
    currentChat: currentChats[navigation.state.params.idChat],
    messageId: messagesId[navigation.state.params.idChat],
  })),
  withStateHandlers(
    ({ initialCounter = { isVisible: false, photoURL: '' } }) => ({
      modal: initialCounter,
    }),
    {
      setUnVisible: () => () => ({ modal: { isVisible: false, photoURL: '' } }),
      setVisible: () => (urlCurrentPhoto) => ({
        modal: { isVisible: true, photoURL: urlCurrentPhoto },
      }),
    },
  ),
  withHandlers({
    send: ({
      text, setText, navigation, dispatch,
    }) => () => {
      if (text !== '') {
        const idChat = navigation.state.params.idChat;
        setText('');
        dispatch(sendMessage(text, idChat));
      }
    },
    onChangeText: ({ setText }) => (text) => {
      setText(text);
    },
    updateStatus: ({ navigation }) => (id) => {
      updateStatus(
        navigation.state.params.idChat,
        id,
        messagesStatus.READ,
      );
    },
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      console.log('ChatListScreen componentWillReceiveProps messagesId ===========', nextProps.currentChat, nextProps.messagesId);
      // console.log('ChatListScreen componentWillReceiveProps currentChat ===========', nextProps.currentChat);
    },
    componentDidMount() {
      // console.log('this.props.currentChat', this.props.currentChat);
      // console.log('ChatListScreen componentWillReceiveProps messagesId ===========', this.props.messagesId);
      // console.log('ChatListScreen componentWillReceiveProps currentChat ===========', this.props.currentChat)
      // const idChat = this.props.navigation.state.params.idChat;
      // console.log('chatId CurrentChatScreen-----------', idChat);
      // subscribe.changed(url.users, (data) => {
      //   console.log('users log ---------------   data', data);
      // });
      // subscribe.added(url.users, (data) => {
      //   console.log('users  added ---------------   data', data);
      // });
      // subscribe.removed(url.users, (data) => {
      //   console.log('users removed ---------------   data', data);
      // });
      // console.log('ChatListScreen componentDidMount state ===========', this.props.statea);
    },
  }),
);

export default hoistStatics(enhance)(CurrentChatScreen);
