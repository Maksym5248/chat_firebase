import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
// import { indent } from '../../../../styles/dimensions';
// import fontSizes from '../../../../styles/fontSizes';
const color1 = '#c2c2c2';

const styles = StyleSheet.create({
  wrapperMain: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
    transform: [
      { rotate: '180deg' },
    ],
  },
  containerMain: {
    maxWidth: '70%',
    alignItems: 'flex-end',
    paddingTop: 5,
    paddingBottom: 5,
  },
  wrapperMessageMain: {
    backgroundColor: '#6fc2e8',
    alignItems: 'flex-end',
    margin: 5,
    marginBottom: 0,
    padding: 5,
    paddingLeft: 20,
    borderRadius: 20,
    borderTopRightRadius: 0,
  },
  timeMain: {
    padding: 5,
  },
  statusMessageMain: {
    paddingRight: 20,
  },
});

export default styles;
