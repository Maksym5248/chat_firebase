import React from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ButtonLogOut from './components/ButtonLogOut';

const DrawerMenuScreen = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
      <ButtonLogOut onPress={props.logOut} />
    </SafeAreaView>
  </ScrollView>
);

DrawerMenuScreen.propTypes = {
  logOut: PropTypes.func.isRequired,
  isReady: PropTypes.bool,
};
export default DrawerMenuScreen;
