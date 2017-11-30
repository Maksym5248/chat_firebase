import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
import { indent } from '../../../../styles/dimensions';
import fontSizes from '../../../../styles/fontSizes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // flex: 1,
    borderBottomColor: colors.backgroundChatListItemBorder,
    borderBottomWidth: 1,
    paddingTop: indent,
    paddingBottom: indent,
    paddingRight: indent,
    paddingLeft: indent,
    backgroundColor: colors.backgroundColor,
  },
  containerAvatar: {
    padding: indent.halfIndent,
  },
  containerDisplayName: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  displayName: {
    fontSize: fontSizes.big,
  },
});

export default styles;
