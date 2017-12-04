import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import withMoment from '../../../../utils/withMoment';
import AvatarWithStatus from '../../../../components/AvatarWithStatus/index';
import messagesStatus from '../../../../constants/messagesStatus';


const urlPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-';

const ChatListItem = ({
  onLongPress,
  onPress,
  lastMessage,
  user,
  currentUser,
}) => (
  <TouchableOpacity onLongPress={onLongPress} onPress={onPress}>
    <View
      style={lastMessage.status !== messagesStatus.READ &&
        lastMessage.author !== currentUser.uid &&
        lastMessage.text !== 'Немає повідомлень' ?
        styles.wrapperIsNew : styles.container}
    >
      <View style={styles.containerAvatar}>
        <AvatarWithStatus
          time={user.online.valueOf()}
          src={user.photoURL !== 'none' ? user.photoURL : urlPhoto}
        />
      </View>
      <View style={styles.wrapperContent}>
        <View style={styles.headerContent}>
          <Text style={styles.displayName}>
            {user.displayName}
          </Text>
          <Text style={styles.isNew}>
            {lastMessage.status !== messagesStatus.READ &&
              lastMessage.author !== currentUser.uid &&
              lastMessage.text !== 'Немає повідомлень' ? 'нове' : ''}
          </Text>
          <Text style={styles.time}>
            {withMoment(lastMessage.time)}
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
    photoURL: urlPhoto,
    uid: '',
    online: Date.now(),
  },
};

ChatListItem.propTypes = {
  onLongPress: PropTypes.func,
  onPress: PropTypes.func,
  lastMessage: PropTypes.object,
  user: PropTypes.object,
  currentUser: PropTypes.object,
};

export default ChatListItem;
