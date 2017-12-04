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
  withState('photoURL', 'setPhotoURL', null),
  withProps(({ navigation }) => ({
    idChat: navigation.state.params.idChat,
  })),
  withProps(({
    currentChats, messagesId, idChat, chatList,
  }) => ({
    currentChat: currentChats[idChat],
    messageId: messagesId[idChat],
    idUserWithChat: chatList[idChat].lastMessages.chatWithUser,
  })),
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
  const { dispatch, idChat, userCurrent } = props;

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
