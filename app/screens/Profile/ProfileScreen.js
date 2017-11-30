import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import s from './styles';

const ProfileScreen = ({ twitterToken, authorize }) => (
  <View>
    <Text>Hello from SettingsScreen</Text>
    <Button
      title='Authorize'
      onPress={authorize}
    />
  </View>
);

ProfileScreen.navigationOptions = ({ navigation }) => ({
  title: 'Профіль',
  headerLeft: <MaterialIcons
    name='menu'
    size={35}
    onPress={() => navigation.navigate('DrawerOpen')}
  />,
});


export default ProfileScreen;
