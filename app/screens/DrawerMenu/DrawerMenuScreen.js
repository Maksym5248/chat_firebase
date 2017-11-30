import React from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { AppLoading } from 'expo';
import styles from './styles';
import ButtonLogOut from './components/ButtonLogOut';

const DrawerMenuScreen = (props) => (
  props.isReady ? (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
        <ButtonLogOut onPress={props.logOut} />
      </SafeAreaView>
    </ScrollView>
  ) : (
    <AppLoading
      startAsync={props.asyncJob}
      onFinish={props.finishJob}
      onError={props.jobError}
    />
  )
);

DrawerMenuScreen.propTypes = {
  logOut: PropTypes.func.isRequired,
  isReady: PropTypes.bool,
  asyncJob: PropTypes.func.isRequired,
  finishJob: PropTypes.func.isRequired,
  jobError: PropTypes.func.isRequired,
};
export default DrawerMenuScreen;
