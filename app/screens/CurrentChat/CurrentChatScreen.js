import React from 'react';
import { FlatList, KeyboardAvoidingView, Text } from 'react-native';
import Type from 'prop-types';
import components from './components';
import styles from './styles';
import messagesStatus from '../../constants/messagesStatus';

const {
  Message,
  MessageMain,
  ModalAvatar,
  InputMessage,
} = components;

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
    keyboardVerticalOffset={70}
  >
    <FlatList
      data={messageId}
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
      keyExtractor={(item) => item}
      ListEmptyComponent={(
        <Text style={styles.empty}>Повідомлень немає</Text>
      )}
      renderItem={({ item }) => {
        const id = item;
        // console.log('+++++++++++++++++++++++++++++++++++++', messageId);
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
