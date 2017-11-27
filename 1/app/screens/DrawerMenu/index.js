import { connect } from 'react-redux';
import { compose, withHandlers, hoistStatics, lifecycle } from 'recompose';
import { withLoadingModal } from '../../utils/enhancers';
import DrawerMenuScreen from './DrawerMenuScreen';
import { drawerMenuOperations } from '../../modules/drawerMenu';
import { isLoading } from '../../modules/app/actions';


const { logOut } = drawerMenuOperations;

const mapStateToProps = state => ({
  statea: state.app,
  emailAndPassword: state.authentication.emailAndPassword,
  credentialFacebook: state.authentication.credentialFacebook,
});

const enhance = compose(
  connect(mapStateToProps),
  withHandlers({
    logOut: ({ dispatch }) => () => dispatch(logOut()),
  }),
  lifecycle({
    componentWillmount(nextProps) {

      // console.log('componentWillReceiveProps state ===========', nextProps.statea);
    },
  }),
);

export default hoistStatics(enhance)(DrawerMenuScreen);
