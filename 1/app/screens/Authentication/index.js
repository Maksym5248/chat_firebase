import { connect } from 'react-redux';
import { compose, withState, withHandlers, hoistStatics, lifecycle } from 'recompose';
import { withLoadingModal } from '../../utils/enhancers';
import AuthenticationScreen from './AuthenticationScreen';
import { authenticationOperations } from '../../modules/authentication';
import {initialized} from '../../modules/app/actions';
// import * as withLoadingModal from '../../utils/enhancers/withLoadingModal';

const { logInWithPasswordAndEmail, logInWithFacebook } = authenticationOperations;
// isLoading: state.app.isLoading,
const mapStateToProps = state => ({
  statea: state.app,
  isLoading: state.app.isLoading,
  emailAndPassword: state.authentication.emailAndPassword,
  credentialFacebook: state.authentication.credentialFacebook,
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
  lifecycle({
    componentDidMount() {
      /*const { accessToken, providerId } = this.props.credentialFacebook;
      const { email, password } = this.props.emailAndPassword;
      if (accessToken !== null && providerId !== null) {
        this.props.dispatch(logInWithFacebook());
      }

      if (email !== null && password !== null) {
        this.props.dispatch(logInWithPasswordAndEmail(this.props.emailAndPassword));
      }*/
    },
  }),
);

export default hoistStatics(enhance)(AuthenticationScreen);
