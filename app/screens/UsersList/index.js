import { connect } from 'react-redux';
import { compose, withStateHandlers, hoistStatics } from 'recompose';
import UsersListScreen from './UsersListScreen';
import screens from '../../constants/screens';
import createChatFb from '../../services/firebase/database/createChat';


const mapStateToProps = state => ({
  userList: state.userList.users,
  userListId: state.userList.usersId,
  userCurrent: state.authentication.currentUser,
});

const enhance = compose(
  connect(mapStateToProps),
  withStateHandlers(
    ({ initialCounter = { isVisible: false, uidValue: '' } }) => ({
      modal: initialCounter,
    }),
    {
      setUnVisible: () => () => ({
        modal: { isVisible: false, uidValue: '' },
      }),
      userListItemOnPress: () => (uid) => ({
        modal: { isVisible: true, uidValue: uid },
      }),
      createChat: ({ modal }, { userCurrent, navigation, userList }) => () => {
        createChatFb(userCurrent.uid, modal.uidValue).then((id) => {
          const { displayName, photoURL } = userList[modal.uidValue];
          navigation.navigate(screens.CurrentChat, {
            idChat: id,
            displayName,
            photoURL,
          });
        }).catch((err) => {
          console.log('err createChatFb', err);
        });
        return {
          modal: { isVisible: false, uidValue: '' },
        };
      },
    },
  ),
);

export default hoistStatics(enhance)(UsersListScreen);
