import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
// import { indent } from '../../../../styles/dimensions';
// import fontSizes from '../../../../styles/fontSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 48, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  containerAvatar: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5,
  },
});

export default styles;
