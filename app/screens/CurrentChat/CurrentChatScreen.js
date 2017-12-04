import React from 'react';
import { FlatList, KeyboardAvoidingView, Text } from 'react-native';
import Type from 'prop-types';
import components from './components';
import styles from './styles';
import withMoment from '../../utils/withMoment';

const {
  Message,
  MessageMain,
  ModalAvatar,
  InputMessage,
} = components;

let prevTime = 0;

const CurrentChatScreen = ({
  modal,
  setUnVisible,
  setVisible,
  onChangeText,
  text,
  send,
  currentChat,
  messageId,
  userList,
  userCurrent,
  idUserWithChat,
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
              key={id}
              userCurrent={userCurrent}
              message={message}
            />
          );
        }

        const user = userList[authorId];
        return (
          <Message
            key={id}
            setVisibleModal={() => setVisible(user.photoURL)}
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
    <ModalAvatar
      offVisibleModalVisible={setUnVisible}
      src={modal.photoURL}
      visible={modal.isVisible}
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
  title: 'Чат',
});

CurrentChatScreen.defaudefaultProps = {

};

CurrentChatScreen.propTypes = {
  currentChat: Type.object,
  messageId: Type.array,
  userList: Type.object,
  userCurrent: Type.object,
  modal: Type.object,
  setVisible: Type.func,
  setUnVisible: Type.func,
  onChangeText: Type.func,
  text: Type.string,
  send: Type.func,
  itemOnLongPress: Type.func,
  deleteChat: Type.func,
  idUserWithChat: Type.string,
};


export default CurrentChatScreen;
