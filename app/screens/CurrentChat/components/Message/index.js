import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Avatar from '../../../../components/Avatar/index';
import styles from './styles';
import withMoment from '../../../../utils/withMoment';

const defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-';


const Message = ({ user, message, setVisibleModal }) => (
  <View style={styles.wrapper}>
    <TouchableOpacity onPress={setVisibleModal}>
      <Avatar size={40} src={user.photoURL !== 'none' ? user.photoURL : defaultAvatar} />
    </TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.wrapperMessage}>
        <Text >
          {message.text}
        </Text>
        <Text style={styles.time} >
          {withMoment(message.time)}
        </Text>
      </View>
    </View>
  </View>
);

Message.propTypes = {
  user: PropTypes.object,
  message: PropTypes.object,
  setVisibleModal: PropTypes.func,
};


export default Message;
