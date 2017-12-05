import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Type from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import Avatar from '../../components/Avatar/index';

const defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-';

const ProfileScreen = ({ userCurrent }) => (
  <View style={styles.container}>
    <Avatar src={userCurrent.photoURL === 'none' ? defaultAvatar : userCurrent.photoURL} size={250} />
    <Text style={styles.text}>
      {userCurrent.displayName}
    </Text>
    <Text style={styles.text}>
      {userCurrent.email}
    </Text>
  </View>
);

ProfileScreen.propTypes = {
  userCurrent: Type.object,
};

ProfileScreen.navigationOptions = ({ navigation }) => ({
  title: 'Профіль',
  headerLeft: <MaterialIcons
    name='menu'
    size={35}
    onPress={() => navigation.navigate('DrawerOpen')}
  />,
});


export default ProfileScreen;
