import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
// import { indent } from '../../../../styles/dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 200,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 200,
  },
  input: {
    padding: 2,
    width: '100%',
    fontSize: 16,
  },
});

export default styles;
