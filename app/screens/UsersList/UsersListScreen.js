import React from 'react';
import {
  ScrollView,
} from 'react-native';
import Type from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';
import UserListItem from './components/UserListItem';
import styles from './styles';
import ModalMenu from '../../components/ModalMenu';

const UsersListScreen = ({
  userList,
  userListId,
  userCurrent,
  modal,
  setUnVisible,
  createChat,
  userListItemOnPress,
}) => (
  <ScrollView style={styles.container}>
    {
      userListId.map(item => {
        if (item && userCurrent.uid && userCurrent.uid !== item) {
          return (
            <UserListItem user={userList[item]} key={item} onPress={() => userListItemOnPress(item)} />);
        }
        return null;
      })
    }
    <ModalMenu
      isVisible={modal.isVisible}
      setUnVisible={setUnVisible}
      onPress={createChat}
      text='Створити чат'
    />
  </ScrollView>
);


UsersListScreen.defaudefaultProps = {
  userCurrent: {},
  userList: {},
  userListId: [],
  visibleModal: false,
};

UsersListScreen.propTypes = {
  userList: Type.object,
  userListId: Type.array,
  userCurrent: Type.object,
  modal: Type.object,
  setUnVisible: Type.func,
  createChat: Type.func,
  userListItemOnPress: Type.func,
};

UsersListScreen.navigationOptions = ({ navigation }) => ({
  title: 'Список Користувачів',
  headerLeft: <MaterialIcons
    name='menu'
    size={35}
    onPress={() => navigation.navigate('DrawerOpen')}
  />,
});

export default UsersListScreen;
