import { StyleSheet } from 'react-native';
import fontSizes from '../../styles/fontSizes';
import colors from '../../styles/colors';


// const color = '#F5FCFF';

const rotate180 = [
  { rotate: '180deg' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  flatList: {
    transform: rotate180,
  },
  flatListContent: {
    // transform: rotate180,
  },
  enteringMessage: {
    textAlign: 'center',
    fontSize: fontSizes.mini,
    height: 15,
  },
  empty: {
    textAlign: 'center',
    fontSize: fontSizes.big,
  },
  separator: {
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    width: '100%',
    fontWeight: '500',
    transform: rotate180,
  },
});

export default styles;
