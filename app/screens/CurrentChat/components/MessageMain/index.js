import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Avatar from '../../../../components/Avatar/index';
import styles from './styles';
import withMoment from '../../../../utils/withMoment';
import messagesStatus from '../../../../constants/messagesStatus';

// animation={'rubberBand'}
const defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-';
// stopAnimation()  animation={'rubberBand'}
const MessageMain = ({ userCurrent, message, onPressText, animation }) => (
  <Animatable.View
    ref={animation}
  >
    <View style={styles.wrapperMain}>
      <View style={styles.containerMain}>
        <TouchableOpacity onLongPress={onPressText}>
          <View style={styles.wrapperMessageMain}>
            <Text style={styles.textMain}>
              {message.text}
            </Text>
            <Text style={styles.timeMain} >
              {withMoment(message.time)}
            </Text>
          </View>
          <Text style={styles.statusMessageMain} >
            {message.status}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => null}>
        <Avatar size={40} src={userCurrent.photoURL !== 'none' ? userCurrent.photoURL : defaultAvatar} />
      </TouchableOpacity>
    </View>
  </Animatable.View>
);

MessageMain.propTypes = {
  userCurrent: PropTypes.object,
  onPressText: PropTypes.func,
  message: PropTypes.object,
  animation: PropTypes.func,
};


export default MessageMain;
