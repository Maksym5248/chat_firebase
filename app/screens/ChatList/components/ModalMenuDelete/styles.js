import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
// import { indent } from '../../../../styles/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 5,
  },
  containerButton: {
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'grey',
  },
});

export default styles;
