import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'flex-start',
    backgroundColor: colors.backgroundColor,
  },
  contentContainer: {
    justifyContent: 'space-between',
  },
});

export default styles;
