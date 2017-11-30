import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
// import { indent } from '../../../../styles/dimensions';
// import fontSizes from '../../../../styles/fontSizes';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  containerInput: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  send: {
    flex: 1,
  },
  input: {
    flex: 5,
  },
  icon: {
    flex: 1,
  },
});

export default styles;
