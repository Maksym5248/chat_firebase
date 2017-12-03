import React from 'react';
import Type from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import AvatarWithStatus from '../../../../components/AvatarWithStatus/index';

const defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-';

const UserListItem = ({ onLongPress, onPress, user }) => (
  <TouchableOpacity onLongPress={onLongPress} onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.containerAvatar}>
        <AvatarWithStatus
          time={user.online.valueOf()}
          size={100}
          src={user.photoURL !== 'none' ? user.photoURL : defaultAvatar}
        />
      </View>
      <View style={styles.containerDisplayName}>
        <Text style={styles.displayName}>
          {user.displayName ? user.displayName : 'Ім\'я не зареєстровано' }
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);


UserListItem.defaudefaultProps = {
  user: {
    displayName: null,
    photoURL: null,
    uid: null,
    online: true,
  },
};

UserListItem.propTypes = {
  onLongPress: Type.func,
  onPress: Type.func,
  user: Type.object,
};

export default UserListItem;
