import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
import { indent } from '../../../../styles/dimensions';
import fontSizes from '../../../../styles/fontSizes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: colors.backgroundChatListItemBorder,
    borderBottomWidth: 1,
    paddingTop: indent.halfIndent,
    paddingBottom: indent.halfIndent,
    backgroundColor: colors.backgroundColor,
  },
  wrapperIsNew: {
    flexDirection: 'row',
    borderBottomColor: colors.backgroundChatListItemBorder,
    borderBottomWidth: 1,
    paddingTop: indent.halfIndent,
    paddingBottom: indent.halfIndent,
    backgroundColor: colors.backgroundColorChatListItemNew,
  },
  wrapperContent: {
    padding: indent.halfIndent,
    width: '80%',
    height: 80,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: fontSizes.big,
  },
  content: {
    fontSize: fontSizes.small,
  },
});

export default styles;
