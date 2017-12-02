import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Avatar from '../../../../components/Avatar/index';
import styles from './styles';
import withMoment from '../../../../utils/withMoment';

const defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-';


const MessageMain = ({ userCurrent, message, modalVisible }) => (
  <View style={styles.wrapperMain}>
    <View style={styles.containerMain}>
      <View style={styles.wrapperMessageMain}>
        <Text >
          {message.text}
        </Text>
        <Text style={styles.timeMain} >
          {withMoment(message.time)}
        </Text>
      </View>
      <Text style={styles.statusMessageMain} >
        {message.status}
      </Text>
    </View>
    <TouchableOpacity onPress={() => null}>
      <Avatar size={40} src={userCurrent.photoURL !== 'none' ? userCurrent.photoURL : defaultAvatar} />
    </TouchableOpacity>
  </View>
);

MessageMain.propTypes = {
  userCurrent: PropTypes.object,
  modalVisible: PropTypes.func,
  message: PropTypes.object,
};


export default MessageMain;
