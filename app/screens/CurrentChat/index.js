import { connect } from 'react-redux';
import { compose, hoistStatics, withState, lifecycle, withStateHandlers, withHandlers, withProps } from 'recompose';
import CurrentChatScreen from './CurrentChatScreen';
import { currentChatOperations } from '../../modules/currentChat';
import messagesStatus from '../../constants/messagesStatus';

const { sendMessage, updateStatusToRead } = currentChatOperations;

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
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      searchMessageWithoutStatusRead(nextProps, this.props);
    },
    componentDidMount() {
      searchMessageWithoutStatusRead(this.props, this.props);
    },
  }),
);

function searchMessageWithoutStatusRead(nextProps, props) {
  const { dispatch, navigation, userCurrent } = props;
  const { idChat } = navigation.state.params;

  if (typeof nextProps.currentChat !== 'undefined') {
    nextProps.messageId.forEach((item) => {
      const author = nextProps.currentChat.messages[item].author;
      const status = nextProps.currentChat.messages[item].status;

      if (status !== messagesStatus.READ && author !== userCurrent.uid) {
        dispatch(updateStatusToRead(
          idChat,
          item,
        ));
      }
    });
  }
}

export default hoistStatics(enhance)(CurrentChatScreen);
