import { connect } from 'react-redux';
import { compose, withStateHandlers, withHandlers, hoistStatics, lifecycle } from 'recompose';
import UsersListScreen from './UsersListScreen';
import screens from '../../constants/screens';
import createChatFb from '../../services/firebase/database/createChat';


const mapStateToProps = state => ({
  userList: state.userList.users,
  userListId: state.userList.usersId,
  userCurrent: state.authentication.currentUser,
  isLoading: false,
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
      userListItemOnPress: () => (uid) => {
        console.log('uid----------', uid);
        return {
          modal: { isVisible: true, uidValue: uid },
        };
      },
      createChat: ({ modal }, { userCurrent, navigation }) => () => {
        createChatFb(userCurrent.uid, modal.uidValue).then((id) => {
          console.log('--------------------------------', id);
          navigation.navigate(screens.CurrentChat, { idChat: id });
        }).catch((err) => {
          console.log('err createChatFb', err);
        });
        return {
          modal: { isVisible: false, uidValue: '' },
        };
      },
    },
  ),
  withHandlers({

  }),
  lifecycle({
    // componentWillReceiveProps() {
    //   // console.log('сomponentWillreciveProps userList', this.props.userList);
    //   // console.log('сomponentWillreciveProps userListID', this.props.userListId);
    // },
    componentDidMount() {

    },
  }),
);

export default hoistStatics(enhance)(UsersListScreen);
