import { StyleSheet } from 'react-native';
import fontSizes from '../../styles/fontSizes';

const color = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color,
  },
  flatList: {
    transform: [
      { rotate: '180deg' },
    ],
  },
  flatListContent: {
    // flex: 1,
    // justifyContent: 'flex-end',
  },
  empty: {
    textAlign: 'center',
    fontSize: fontSizes.big,
    transform: [
      { rotate: '180deg' },
    ],
  },
});

export default styles;
