import { connect } from 'react-redux';
import { compose, withState, withHandlers, hoistStatics, lifecycle } from 'recompose';
import { withLoadingModal } from '../../utils/enhancers';
import AuthenticationScreen from './AuthenticationScreen';
import { authenticationOperations } from '../../modules/authentication';
import {isLoading} from "../../modules/app/actions";
import appOperations from "../../modules/app/operations";
// import * as withLoadingModal from '../../utils/enhancers/withLoadingModal';

const { logInWithPasswordAndEmail, logInWithFacebook } = authenticationOperations;

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
    componentWillReceiveProps(nextProps) {

      // console.log('componentWillReceiveProps state ===========', nextProps.statea);
    },
    componentDidMount() {
      // this.props.dispatch(appOperations.imagesLoaded(false));
      // this.props.dispatch(isLoading(false));
      // console.log('AuthenticationScreen componentDidMount emailAndPassword ===========', this.props.emailAndPassword);
      // console.log('AuthenticationScreen componentDidMount credentialFacebook ===========', this.props.credentialFacebook);
      // console.log('componentDidMount state ===========', this.props.statea);
    },
  }),
);

export default hoistStatics(enhance)(AuthenticationScreen);
