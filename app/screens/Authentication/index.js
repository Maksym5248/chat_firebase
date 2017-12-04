import { connect } from 'react-redux';
import { compose, withState, withHandlers, hoistStatics, lifecycle } from 'recompose';
import { withLoadingModal } from '../../utils/enhancers';
import AuthenticationScreen from './AuthenticationScreen';
import { authenticationOperations } from '../../modules/authentication';

const { logInWithPasswordAndEmail, logInWithFacebook } = authenticationOperations;

const mapStateToProps = state => ({
  statea: state.app,
  isLoading: state.app.isLoading,
  chatList: state.chatList.chats,
  chatsListId: state.chatList.chatsId,
});

const enhance = compose(
  connect(mapStateToProps),
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withLoadingModal.stateProp('isLoading'),
  withHandlers({
    setEmail: ({ setEmail }) => (text) => setEmail(text),
    setPassword: ({ setPassword }) => (text) => setPassword(text),
    logInWithFaceBook: ({ dispatch }) => () => dispatch(logInWithFacebook()),
    logInWithPasswordAndEmail: ({ email, password, dispatch }) => () => (
      dispatch(logInWithPasswordAndEmail({ email, password }))),
  }),
);

export default hoistStatics(enhance)(AuthenticationScreen);
