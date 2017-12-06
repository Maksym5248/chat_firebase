import { connect } from 'react-redux';
import { compose, withStateHandlers, hoistStatics } from 'recompose';
import UsersListScreen from './UsersListScreen';
import { userListOperations } from '../../modules/usersList';


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
      createChat: ({ modal }, { dispatch, navigation }) => () => {
        dispatch(userListOperations.createChat(modal.uidValue, navigation));
        return {
          modal: { isVisible: false, uidValue: '' },
        };
      },
    },
  ),
);

export default hoistStatics(enhance)(UsersListScreen);
