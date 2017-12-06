import React from 'react';
import { FlatList, KeyboardAvoidingView, Text } from 'react-native';
import Type from 'prop-types';
import components from './components';
import styles from './styles';
import withMoment from '../../utils/withMoment';
import ModalMenu from '../../components/ModalMenu/index';
import Avatar from '../../components/Avatar/index';

const defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-';


const {
  Message,
  MessageMain,
  ModalProfile,
  InputMessage,
} = components;

let prevTime = 0;

const CurrentChatScreen = ({
  selectedUser,
  setSelectedUser,
  onChangeText,
  text,
  send,
  currentChat,
  messageId,
  userList,
  userCurrent,
  idUserWithChat,
  idMessage,
  setIdMessage,
  deleteMessage,
  animationMessageMain,
  animationMessage,
}) => (
  <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={70}
  >
    <FlatList
      data={messageId}
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
      keyExtractor={(item) => item}
      ItemSeparatorComponent={({ leadingItem }) => {
        const time = currentChat.messages[leadingItem].time;
        const difference = prevTime - 10 * 60 * 1000;
        if (difference > time) {
          prevTime = time;
          return (<Text style={styles.separator}>{withMoment(time)}</Text>);
        }
        prevTime = time;
        return null;
      }}
      renderItem={({ item }) => {
        const id = item;
        const authorId = currentChat.messages[id].author;
        const message = currentChat.messages[id];

        if (authorId === userCurrent.uid) {
          return (
            <MessageMain
              animation={ref => {
                if (ref) {
                  animationMessageMain(ref, id);
                }
              }}
              key={id}
              userCurrent={userCurrent}
              message={message}
              onPressText={() => setIdMessage(id)}
            />
          );
        }

        const user = userList[authorId];
        return (
          <Message
            animation={ref => {
              if (ref) {
                animationMessage(ref, id);
              }
            }}
            key={id}
            setVisibleModal={() => setSelectedUser(user)}
            user={user}
            message={message}
          />
        );
      }}
    />
    <Text style={styles.enteringMessage}>
      {
        typeof currentChat !== 'undefined' &&
        typeof currentChat.meta !== 'undefined' &&
        typeof currentChat.meta.isFetching[idUserWithChat] !== 'undefined' ?
          'повідомлення вводиться...' : null
      }
    </Text>
    <ModalProfile
      setUnVisible={() => setSelectedUser(null)}
      selectedUser={selectedUser || {}}
      isVisible={Boolean(selectedUser)}
    />
    <ModalMenu
      isVisible={Boolean(idMessage)}
      setUnVisible={() => setIdMessage(null)}
      onPress={deleteMessage}
      text='Видалити'
    />
    <InputMessage
      value={text}
      onChangeText={onChangeText}
      send={send}
      openCamera={() => null}
      openGallery={() => null}
    />
  </KeyboardAvoidingView>
);

CurrentChatScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.displayName,
  headerRight: (
    <Avatar
      size={50}
      marginRight={10}
      src={navigation.state.params.photoURL !== 'none' ? navigation.state.params.photoURL : defaultAvatar}
    />),
});

CurrentChatScreen.defaudefaultProps = {

};

CurrentChatScreen.propTypes = {
  currentChat: Type.object,
  messageId: Type.array,
  userList: Type.object,
  userCurrent: Type.object,
  selectedUser: Type.object,
  setSelectedUser: Type.func,
  onChangeText: Type.func,
  text: Type.string,
  send: Type.func,
  idUserWithChat: Type.string,
  idMessage: Type.string,
  setIdMessage: Type.func,
  deleteMessage: Type.func,
  animationMessageMain: Type.func,
  animationMessage: Type.func,
};


export default CurrentChatScreen;
