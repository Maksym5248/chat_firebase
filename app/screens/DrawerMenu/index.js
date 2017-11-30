import { connect } from 'react-redux';
import { compose, withHandlers, hoistStatics, lifecycle, withState } from 'recompose';
import { withLoadingModal } from '../../utils/enhancers';
import DrawerMenuScreen from './DrawerMenuScreen';
import subscribe from '../../services/firebase/database/subscribe';
import url from '../../constants/url';
import createUserToFb from '../../services/firebase/database/createUserToFb';
import createObjectInChat from '../../services/firebase/database/createObjectInChat';
import { drawerMenuOperations } from '../../modules/drawerMenu';
import { chatListOperations } from '../../modules/chatList';
import { userListOperations } from '../../modules/usersList';


const { setUser } = userListOperations;
const { setChat } = chatListOperations;
const { logOut } = drawerMenuOperations;

const mapStateToProps = state => ({
  currentUser: state.authentication.currentUser,
  userProfileUrlChatList: `${url.userProfile}/${state.authentication.currentUser.uid}/chatList`,
});

const enhance = compose(
  connect(mapStateToProps),
  withState('isReady', 'setIsReady', false),
  withHandlers({
    logOut: ({ dispatch }) => () => dispatch(logOut()),
    asyncJob: ({ dispatch, userProfileUrlChatList }) => () => Promise.all([
      subscribe.added(url.users, (data) => {
        console.log('users  added ---------------   data', data);
        if (data) {
          dispatch(setUser(createUserToFb(data, true)));
        }
      }),
      subscribe.changed(url.users, (data) => {
        console.log('DrawerMenuScreen index subscribe.changed ', data);
        if (data) {
          dispatch(setUser(createUserToFb(data, true)));
        }
      }),
      subscribe.removed(url.users, (data) => {
        // console.log('users removed ---------------   data', data);
      }),
      subscribe.added(userProfileUrlChatList, (data) => {
        console.log('8-----------------');
        if (data) {
          dispatch(setChat(createObjectInChat(null, null, data)));
        }
      }),
    ]),
    finishJob: ({ setIsReady }) => () => {
      setIsReady(true);
    },
    jobError: ({ setIsReady }) => error => {
      setIsReady(true);
      console.log('errror  DrawerMenuScreen index withHandlers jobError', error);
    },
  }),
  lifecycle({
    componentDidMount() {

      // console.log('componentWillReceiveProps state ===========', nextProps.statea);
    },
  }),
);

export default hoistStatics(enhance)(DrawerMenuScreen);
