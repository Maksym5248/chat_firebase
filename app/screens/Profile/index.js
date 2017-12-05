import { connect } from 'react-redux';
import { compose, withState, hoistStatics } from 'recompose';
import ProfileScreen from './ProfileScreen';

const mapStateToProps = state => ({
  userCurrent: state.authentication.currentUser,
});

const enhance = compose(
  connect(mapStateToProps),
  withState('twitterToken', 'setTwitterToken', 'sda'),
);

export default hoistStatics(enhance)(ProfileScreen);
