import { connect } from 'react-redux';
import { compose, withState, withHandlers, hoistStatics, lifecycle } from 'recompose';
// import { withLoadingModal, withLoadingState } from '../../utils/enhancers';
import AuthenticationScreen from './AuthenticationScreen';
import { authenticationOperations } from '../../modules/Authentication';

const { logInWithPasswordAndEmail, logInWithFacebook } = authenticationOperations;

const mapStateToProps = state => ({
  statea: state.authenticationReducer,
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
  lifecycle({
    componentWillReceiveProps(nextProps) {
      // console.log('componentWillReceiveProps state ===========', nextProps.statea);
    },
    componentDidMount() {
      // console.log('componentDidMount state ===========', this.props.statea);
    },
  }),
);

export default hoistStatics(enhance)(AuthenticationScreen);
