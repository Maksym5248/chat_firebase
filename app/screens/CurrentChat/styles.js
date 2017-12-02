import { StyleSheet } from 'react-native';

const color = '#F5FCFF';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: color,
  },
  flatList: {
    transform: [
      { rotate: '180deg' },
    ],
  },
  empty: {

  },
});

export default styles;
