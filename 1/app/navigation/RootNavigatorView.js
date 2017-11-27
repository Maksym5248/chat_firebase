import React from 'react';
import T from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import { Font, AppLoading } from 'expo';
import { withHandlers, compose, lifecycle } from 'recompose';
import { appOperations } from '../modules/app';
import Navigator from './RootNavigator';
import { authenticationOperations } from '../modules/authentication';

const { logInWithFacebook, logInWithPasswordAndEmail } = authenticationOperations;


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
  asyncJob: (props) => () => Promise.all([
    Font.loadAsync({
      'gill-sans': require('../assets/fonts/GillSans.ttf'), // eslint-disable-line global-require
    }),
    () => {
      // console.log('NavigatorView credentialFacebook', this.props);

      // console.log('NavigatorView credentialFacebook  ===========', props.credentialFacebook);
    },
  ]),
  finishJob: props => () => {

    const { accessToken, providerId } = this.props.credentialFacebook;
    const { email, password } = this.props.emailAndPassword;

    if (accessToken !== null && providerId !== null) {
      this.props.dispatch(logInWithFacebook());
    }

    if (email !== null && password !== null) {
      this.props.dispatch(logInWithPasswordAndEmail(this.props.emailAndPassword));
    }
    props.dispatch(appOperations.imagesLoaded(true));
  },
  jobError: props => error => {
    console.warn(error);
    props.dispatch(appOperations.imagesLoaded(true));
  },
}));

export default enhance(NavigatorView);
