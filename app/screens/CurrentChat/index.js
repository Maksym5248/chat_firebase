import { connect } from 'react-redux';
import { compose, hoistStatics, withState, lifecycle, withStateHandlers, withHandlers, withProps } from 'recompose';
import CurrentChatScreen from './CurrentChatScreen';
import { currentChatOperations } from '../../modules/currentChat';
import messagesStatus from '../../constants/messagesStatus';
import updateMeta from '../../services/firebase/database/updateMeta';

const { sendMessage, updateStatusToRead } = currentChatOperations;
let timer;


const mapStateToProps = state => ({
  currentChats: state.currentChatList.currentChat,
  messagesId: state.currentChatList.messagesId,
  userList: state.userList.users,
  userCurrent: state.authentication.currentUser,
  chatList: state.chatList.chats,
});

const enhance = compose(
  connect(mapStateToProps),
  withState('text', 'setText', ''),
  withProps(({
    currentChats, messagesId, navigation, chatList,
  }) => ({
    currentChat: currentChats[navigation.state.params.idChat],
    messageId: messagesId[navigation.state.params.idChat],
    idChat: navigation.state.params.idChat,
    idUserWithChat: chatList[navigation.state.params.idChat].lastMessages.chatWithUser,
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
      text, setText, dispatch, idChat, userCurrent,
    }) => () => {
      updateMeta(idChat, fetchingNull(userCurrent.uid));
      if (text !== '') {
        setText('');
        dispatch(sendMessage(text, idChat));
      }
    },
    onChangeText: ({ setText, userCurrent, idChat }) => (text) => {
      updateMeta(idChat, {
        isFetching: {
          [userCurrent.uid]: userCurrent.uid,
        },
      });
      clearTimeout(timer);
      timer = setInterval(() => {
        updateMeta(idChat, fetchingNull(userCurrent.uid));
      }, 4000);
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

function fetchingNull(uid) {
  return {
    isFetching: {
      [uid]: null,
    },
  };
}

export default hoistStatics(enhance)(CurrentChatScreen);
