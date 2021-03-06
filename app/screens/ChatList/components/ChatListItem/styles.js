import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
import { halfIndent } from '../../../../styles/dimensions';
import fontSizes from '../../../../styles/fontSizes';
import s from '../../../../styles/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: colors.backgroundChatListItemBorder,
    borderBottomWidth: 0.5,
    padding: halfIndent,
    backgroundColor: colors.backgroundColor,
  },
  wrapperIsNew: {
    flexDirection: 'row',
    borderBottomColor: colors.backgroundChatListItemBorder,
    borderBottomWidth: 0.5,
    padding: halfIndent,
    backgroundColor: colors.backgroundColorChatListItemNew,
  },
  containerAvatar: {
    position: 'absolute',
    height: 40,
    padding: halfIndent,
  },
  wrapperContent: {
    flex: 4,
    padding: halfIndent,
    height: 80,
    marginLeft: 90,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  displayName: {
    flex: 4,
    textAlign: 'center',
    fontSize: fontSizes.big,
    fontWeight: '500',
  },
  isNew: {
    flex: 1,
    textAlign: 'center',
  },
  time: {
    flex: 1,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: fontSizes.small,
  },
});

export default styles;
