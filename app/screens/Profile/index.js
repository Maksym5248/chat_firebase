import { connect } from 'react-redux';
import { compose, hoistStatics } from 'recompose';
import ProfileScreen from './ProfileScreen';

const mapStateToProps = state => ({
  userCurrent: state.authentication.currentUser,
});

const enhance = compose(
  connect(mapStateToProps),
);

export default hoistStatics(enhance)(ProfileScreen);
