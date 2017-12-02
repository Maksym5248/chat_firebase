import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { View, Text, TouchableOpacity } from 'react-native';
import Avatar from '../../../../components/Avatar/index';
import styles from './styles';


const MessageMain = ({ userCurrent, message, modalVisible }) => (
  <View style={styles.wrapperMain}>
    <View style={styles.containerMain}>
      <View style={styles.wrapperMessageMain}>
        <Text >
          {message.text}
        </Text>
        <Text style={styles.timeMain} >
          {moment(message.time).format('hh:mm')}
        </Text>
      </View>
      <Text style={styles.statusMessageMain} >
        {message.status}
      </Text>
    </View>
    <TouchableOpacity onPress={() => null}>
      <Avatar size={40} src={userCurrent.photoUrl} />
    </TouchableOpacity>
  </View>
);

MessageMain.propTypes = {
  userCurrent: PropTypes.object,
  modalVisible: PropTypes.func,
  message: PropTypes.object,
};


export default MessageMain;
