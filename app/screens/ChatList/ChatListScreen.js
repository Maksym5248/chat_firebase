import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import Type from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import ModalMenu from '../../components/ModalMenu';
import ChatListItem from './components/ChatListItem';


const ChatListScreen = ({
  chatsListId,
  chatList,
  userList,
  moveToChat,
  itemOnLongPress,
  modal,
  setUnVisible,
  deleteChat,
  userCurrent,
}) => (
  <View>
    <ScrollView>
      {
        chatsListId.map(item => (
          <ChatListItem
            currentUser={userCurrent}
            user={userList[chatList[item].lastMessages.chatWithUser]}
            lastMessage={chatList[item].lastMessages}
            key={item}
            onLongPress={() => itemOnLongPress(item)}
            onPress={() => moveToChat(item)}
          />))
      }
    </ScrollView>
    <ModalMenu
      isVisible={modal.isVisible}
      setUnVisible={setUnVisible}
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
  modal: Type.object,
  setUnVisible: Type.func,
  moveToChat: Type.func,
  itemOnLongPress: Type.func,
  deleteChat: Type.func,
  userCurrent: Type.object,
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
