import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
// import { indent } from '../../../../styles/dimensions';
// import fontSizes from '../../../../styles/fontSizes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 2,
    paddingLeft: 5,
    backgroundColor: colors.backgroundColorChatListHeader,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});

export default styles;
