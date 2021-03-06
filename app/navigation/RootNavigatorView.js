import React from 'react';
import T from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import { Font, AppLoading } from 'expo';
import { withHandlers, compose } from 'recompose';
import { appOperations } from '../modules/app';
import Navigator from './RootNavigator';
import onAuthStateChanged from '../services/firebase/autorize/onAuthStateChanged';

const NavigatorView = ({
  dispatch,
  navigator,
  isReady,
  asyncJob,
  finishJob,
  jobError,
}) => (
  isReady ? (
    <Navigator navigation={addNavigationHelpers({ dispatch, state: navigator })} />
  ) : (
    <AppLoading
      startAsync={asyncJob}
      onFinish={finishJob}
      onError={jobError}
    />
  )
);

NavigatorView.propTypes = {
  dispatch: T.func,
  navigator: T.object,
  isReady: T.bool,
  asyncJob: T.func,
  finishJob: T.func,
  jobError: T.func,
};

const enhance = compose(withHandlers({
  asyncJob: ({ dispatch }) => () => Promise.all([
    Font.loadAsync({
      'gill-sans': require('../assets/fonts/GillSans.ttf'), // eslint-disable-line global-require
    }),
    onAuthStateChanged(dispatch).then(() => {
      dispatch(appOperations.initialized({}));
      return true;
    }).catch((err) => {
      console.log('err---------', err);
    }),
  ]),
  finishJob: props => () => {
    props.dispatch(appOperations.imagesLoaded(true));
  },
  jobError: props => error => {
    console.warn(error);
    props.dispatch(appOperations.imagesLoaded(true));
  },
}));

export default enhance(NavigatorView);
