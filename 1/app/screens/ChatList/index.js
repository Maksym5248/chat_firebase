import { connect } from 'react-redux';
import { compose, hoistStatics, lifecycle, withProps } from 'recompose';
import { withLoadingModal } from '../../utils/enhancers';
import ChatListScreen from './ChatListScreen';

const mapStateToProps = state => ({
  statea: state.app,
  isLoading: state.app,
});

const enhance = compose(
  connect(mapStateToProps),
  lifecycle({
    componentWillReceiveProps(nextProps) {

      // console.log('ChatListScreen componentWillReceiveProps state ===========', nextProps.statea);
    },
    componentDidMount() {
      // console.log('ChatListScreen componentDidMount state ===========', this.props.statea);
    },
  }),
);

export default hoistStatics(enhance)(ChatListScreen);
