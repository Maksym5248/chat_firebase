import { connect } from 'react-redux';
import { compose, hoistStatics, lifecycle, withStateHandlers } from 'recompose';
import { withLoadingModal } from '../../utils/enhancers';
import CurrentChatScreen from './CurrentChatScreen';
import subscribe from '../../services/firebase/database/subscribe';
import url from '../../constants/url';

const mapStateToProps = state => ({
  statea: state.app,
  isLoading: state.app,
});

const enhance = compose(
  connect(mapStateToProps),
  withStateHandlers(
    ({ initialCounter = { isVisible: false, photoURL: '' } }) => ({
      modal: initialCounter,
    }),
    {
      setUnVisible: () => () => ({
        modal: { isVisible: false, photoURL: '' },
      }),
      setVisible: () => (urlCurrentPhoto) =>
        // console.log('uid----------', src);
        ({
          modal: { isVisible: true, photoURL: urlCurrentPhoto },
        })
      ,
    },
  ),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      // console.log('ChatListScreen componentWillReceiveProps state ===========', nextProps.statea);
    },
    componentDidMount() {
      const idChat = this.props.navigation.state.params.idChat;
      console.log('chatId CurrentChatScreen-----------', idChat);
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
