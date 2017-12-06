import { connect } from 'react-redux';
import { compose, hoistStatics, withState, lifecycle, withHandlers, withProps } from 'recompose';
import CurrentChatScreen from './CurrentChatScreen';
import { currentChatOperations } from '../../modules/currentChat';
import messagesStatus from '../../constants/messagesStatus';
import updateMeta from '../../services/firebase/database/updateMeta';
import remove from '../../services/firebase/database/remove';

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
  withProps(({ navigation }) => ({
    idChat: navigation.state.params.idChat,
  })),
  withState('text', 'setText', ''),
  withState('selectedUser', 'setSelectedUser', null),
  withState('idMessage', 'setIdMessage', null),
  withProps(({
    currentChats, messagesId, idChat, chatList,
  }) => ({
    currentChat: currentChats[idChat],
    messageId: messagesId[idChat],
    idUserWithChat: chatList[idChat].lastMessages.chatWithUser,
  })),
  withHandlers(() => {
    const refMessagesMain = {};
    const refMessages = {};

    return {
      send: ({ text, setText, dispatch, idChat, userCurrent }) => () => {
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
      deleteMessage: ({ setIdMessage, idMessage, idChat }) => () => {
        remove.message(idChat, idMessage);
        setIdMessage(null);
      },
      animationMessageMain: () => (ref, id) => {
        if (ref) {
          refMessagesMain[id] = ref;
        }
      },
      rubberBandMessageMain: () => (id) => {
        refMessagesMain[id].rubberBand(800);
      },
      animationMessage: () => (ref, id) => {
        if (ref) {
          refMessages[id] = ref;
        }
      },
      rubberBandMessage: () => (id) => {
        refMessages[id].rubberBand(800);
      },
    };
  }),
  lifecycle({
    // componentWillReceiveProps(nextProps) {
    //
    // },
    componentDidMount() {
      searchMessageWithoutStatusRead(this.props, this.props);
    },
    componentDidUpdate(prevProps) {
      // if (this.props.messageId &&
      //   this.props.messageId.length === 1) {
      //   this.props.rubberBandMessageMain(this.props.messageId[0]);
      // }
      console.log('-------------this.props.messageId', this.props.messageId);
      searchMessageWithoutStatusRead(this.props, prevProps);
      if (this.props.messageId && prevProps.messageId &&
        this.props.messageId.length > prevProps.messageId.length || 0) {
        this.props.rubberBandMessageMain(this.props.messageId[0]);
      }
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
