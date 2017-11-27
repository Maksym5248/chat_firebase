import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Search from '../Search/index';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Avatar from '../../../../components/Avatar/index';

const styles = StyleSheet.create({

});


const ChatListHeader = ({
  user, goToProfile, logOut,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={goToProfile}>
      <Avatar size={50} src={user.photoURL} />
    </TouchableOpacity>
    <Search />
    <TouchableOpacity onPress={logOut}>
      <MaterialCommunityIcons name='exit-to-app' size={36} />
    </TouchableOpacity>
  </View>
);

ChatListHeader.propTypes = {
  user: PropTypes.object.isRequired,
  goToProfile: PropTypes.func,
  logOut: PropTypes.func,
};

ChatListHeader.defaudefaultProps = {
  message: {
    title: 'Костін Максим',
    date: '20.10.2017',
    isNew: 'Нове',
  },
};


export default ChatListHeader;
