import { connect } from 'react-redux';
import { compose, withHandlers, hoistStatics, lifecycle } from 'recompose';
import { withLoadingModal } from '../../utils/enhancers';
import DrawerMenuScreen from './DrawerMenuScreen';
import { drawerMenuOperations } from '../../modules/drawerMenu';


const { logOut, subscribeToAll } = drawerMenuOperations;

const mapStateToProps = state => ({
  currentUser: state.authentication.currentUser,
  isLoading: state.drawerMenu.isLoading,
});

const enhance = compose(
  connect(mapStateToProps),
  withLoadingModal.stateProp('isLoading'),
  withHandlers({
    logOut: ({ dispatch }) => () => dispatch(logOut()),
  }),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(subscribeToAll());
    },
  }),
);

export default hoistStatics(enhance)(DrawerMenuScreen);
