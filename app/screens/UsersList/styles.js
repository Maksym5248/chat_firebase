import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    backgroundColor: colors.backgroundColor,
  },
  contentContainer: {
    justifyContent: 'space-between',
  },
});

export default styles;
