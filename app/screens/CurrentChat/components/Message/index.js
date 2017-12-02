import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Avatar from '../../../../components/Avatar/index';
import styles from './styles';


const Message = ({ user, message, setVisibleModal }) => (
  <View style={styles.wrapper}>
    <TouchableOpacity onPress={setVisibleModal}>
      <Avatar size={40} src={user.photoURL} />
    </TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.wrapperMessage}>
        <Text >
          {message.text}
        </Text>
        <Text style={styles.time} >
          {moment(message.time).format('hh:mm')}
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
