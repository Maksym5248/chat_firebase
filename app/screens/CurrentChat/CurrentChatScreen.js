import React from 'react';
import { StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native';
import Type from 'prop-types';

import Message from './components/Message/index';
import MessageMain from './components/MessageMain/MessageMain';
import ModalAvatar from './components/ModalAvatar/ModalAvatar';
import InputMessage from './components/InputMessage/index';

const color = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: color,
  },
});

// read || notSent || sending || delivered

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
}) => (
  <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={50}
  >
    <FlatList
      data={messageId}
      keyExtractor={(item) => item}
      renderItem={({ item }) => {
        const id = item;
        const autorId = currentChat.messages[id].author;
        const message = currentChat.messages[id];

        if (autorId === userCurrent.uid) {
          return (
            <MessageMain
              key={id}
              userCurrent={userCurrent}
              message={message}
            />
          );
        }

        const user = userList[autorId];
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
};


export default CurrentChatScreen;
