import { connect } from 'react-redux';
import { compose, withState, withProps } from 'recompose';
import { withLoadingModal, withLoadingState } from '../../utils/enhancers';
import ChatListScreen from './ChatListScreen';

const enhance = compose(connect());

export default enhance(ChatListScreen);
