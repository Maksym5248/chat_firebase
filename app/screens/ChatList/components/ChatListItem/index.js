import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import styles from './styles';
import Avatar from '../../../../components/Avatar/index';


const urlPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-';

const ChatListItem = ({
  onLongPress, onPress, lastMessage, user,
}) => (
  <TouchableOpacity onLongPress={onLongPress} onPress={onPress}>
    <View style={styles.container}>
      <View >
        <Avatar src={user.photoURL !== 'none' ? user.photoURL : urlPhoto} />
      </View>
      <View style={styles.wrapperContent}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>
            {user.displayName}
          </Text>
          <Text>
            {moment(lastMessage.time).format('hh:mm')}
          </Text>
          <Text>
            {'Нове'}
          </Text>
        </View>
        <Text style={styles.content}>
          {lastMessage.text}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);


ChatListItem.defaudefaultProps = {
  lastMessage: {
    autor: 'Автор',
    text: 'text',
    date: Date.now(),
  },
  user: {
    displayName: 'Ім\'я немає',
    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-',
    uid: '',
    online: Date.now(),
  },
};

ChatListItem.propTypes = {
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  lastMessage: PropTypes.object,
  user: PropTypes.object,
};

export default ChatListItem;
