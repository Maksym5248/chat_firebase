import { connect } from 'react-redux';
import { compose, hoistStatics, withState, lifecycle, withHandlers, withProps } from 'recompose';
import CurrentChatScreen from './CurrentChatScreen';
import { currentChatOperations } from '../../modules/currentChat';
import messagesStatus from '../../constants/messagesStatus';
import remove from '../../services/firebase/database/remove';

const { sendMessage, updateStatusToRead, updateMeta } = currentChatOperations;

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
      send: ({ text, setText, dispatch, idChat }) => () => {
        if (text !== '') {
          setText('');
          dispatch(sendMessage(text, idChat));
        }
      },
      onChangeText: ({ setText, userCurrent, idChat, dispatch }) => (text) => {
        dispatch(updateMeta(idChat, userCurrent.uid));
        setText(text);
      },
      deleteMessage: ({ setIdMessage, idMessage, idChat }) => () => {
        remove.message(idChat, idMessage);
        setIdMessage(null);
      },
      animationMessageMain: () => (ref, id) => {
        if (ref) { refMessagesMain[id] = ref; }
      },
      rubberBandMessageMain: () => (id) => {
        refMessagesMain[id].rubberBand(800);
      },
      animationMessage: ({ dispatch, idChat }) => (ref, id, status) => {
        if (status !== messagesStatus.READ && ref) {
          refMessages[id] = ref;

          dispatch(updateStatusToRead(
            idChat,
            id,
          ));
        }

        // if (ref) { refMessages[id] = ref; }
      },
      rubberBandMessage: () => (id) => {
        refMessages[id].rubberBand(800);
      },
    };
  }),
  lifecycle({
    componentDidMount() {
      // searchMessageWithoutStatusRead(this.props);
    },
    componentDidUpdate(prevProps) {
     // searchMessageWithoutStatusRead(this.props, this.props.rubberBandMessage);
      // this.props.rubberBandMessage();
     if (this.props.messageId && prevProps.messageId &&
         this.props.userCurrent.uid === this.props.currentChat.messages[this.props.messageId[0]].author &&
         this.props.messageId.length > prevProps.messageId.length) {
       this.props.rubberBandMessageMain(this.props.messageId[0]);
     }
    },
  }),
);

// function searchMessageWithoutStatusRead(props, rubberBandMessage = null) {
//   const { dispatch, idChat, userCurrent } = props;
//   if (typeof props.currentChat !== 'undefined') {
//     props.messageId.forEach((item) => {
//       const author = props.currentChat.messages[item].author;
//       const status = props.currentChat.messages[item].status;
//
//       if (status !== messagesStatus.READ && author !== userCurrent.uid) {
//         dispatch(updateStatusToRead(
//           idChat,
//           item,
//         ));
//         if (rubberBandMessage !== null) {
//           // rubberBandMessage(item);
//         }
//       }
//     });
//   }
// }


export default hoistStatics(enhance)(CurrentChatScreen);
