import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import Type from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import ModalMenu from '../../components/ModalMenu';
import ChatListItem from './components/ChatListItem';
import styles from './styles';


const ChatListScreen = ({
  chatsListId,
  chatList,
  userList,
  moveToChat,
  setIdChat,
  deleteChat,
  userCurrent,
  searchValue,
  setSearch,
  idChat,
}) => (
  <View style={styles.container}>
    <TextInput
      placeholder='Знайти'
      underlineColorAndroid='white'
      value={searchValue}
      onChangeText={setSearch}
      style={[styles.textInput]}
    />
    <ScrollView contentContainerStyle={styles.container}>
      {
        chatsListId.map(item => (
          <ChatListItem
            currentUser={userCurrent}
            user={userList[chatList[item].lastMessages.chatWithUser]}
            lastMessage={chatList[item].lastMessages}
            key={item}
            onLongPress={() => setIdChat(item)}
            onPress={() => moveToChat(item)}
          />))
      }
    </ScrollView>
    <ModalMenu
      isVisible={Boolean(idChat)}
      setUnVisible={() => setIdChat(false)}
      onPress={deleteChat}
      text='Видалити'
    />
  </View>
);


ChatListScreen.defaudefaultProps = {
  userCurrent: {},
  userList: {},
  chatList: [],
  chatsListId: [],
  visibleModal: false,
};

ChatListScreen.propTypes = {
  chatList: Type.object,
  chatsListId: Type.array,
  userList: Type.object,
  moveToChat: Type.func,
  setIdChat: Type.func,
  deleteChat: Type.func,
  userCurrent: Type.object,
  setSearch: Type.func,
  searchValue: Type.string,
  idChat: Type.string,
};

ChatListScreen.navigationOptions = ({ navigation }) => ({
  title: 'Список чатів',
  headerLeft: <MaterialIcons
    name='menu'
    size={35}
    onPress={() => navigation.navigate('DrawerOpen')}
  />,
});

export default ChatListScreen;
