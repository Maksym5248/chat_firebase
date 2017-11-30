import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
// import { indent } from '../../../../styles/dimensions';
// import fontSizes from '../../../../styles/fontSizes';
const color1 = '#c2c2c2';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
  },
  container: {
    maxWidth: '70%',
    alignItems: 'flex-start',
    paddingTop: 5,
    paddingBottom: 5,
  },
  wrapperMessage: {
    backgroundColor: color1,
    alignItems: 'flex-start',
    margin: 5,
    marginBottom: 0,
    padding: 5,
    paddingRight: 20,
    borderRadius: 20,
    borderTopLeftRadius: 0,
  },
  time: {
    padding: 5,
  },
  statusMessage: {
    paddingLeft: 20,
  },
});

export default styles;
