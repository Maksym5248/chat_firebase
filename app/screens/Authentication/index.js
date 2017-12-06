import { connect } from 'react-redux';
import { compose, withState, withHandlers, hoistStatics } from 'recompose';
import AuthenticationScreen from './AuthenticationScreen';
import { authenticationOperations } from '../../modules/authentication';

const { logInWithPasswordAndEmail, logInWithFacebook } = authenticationOperations;

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  chatList: state.chatList.chats,
  chatsListId: state.chatList.chatsId,
});

const enhance = compose(
  connect(mapStateToProps),
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withHandlers({
    setEmail: ({ setEmail }) => (text) => setEmail(text),
    setPassword: ({ setPassword }) => (text) => setPassword(text),
    logInWithFaceBook: ({ dispatch }) => () => dispatch(logInWithFacebook()),
    logInWithPasswordAndEmail: ({ email, password, dispatch }) => () => (
      dispatch(logInWithPasswordAndEmail({ email, password }))),
  }),
);

export default hoistStatics(enhance)(AuthenticationScreen);
