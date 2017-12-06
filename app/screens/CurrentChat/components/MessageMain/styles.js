import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
import fontSizes from '../../../../styles/fontSizes';
// import { indent } from '../../../../styles/dimensions';

// const color1 = '#c2c2c2';
const rotate180 = [
  { rotate: '180deg' },
];

const styles = StyleSheet.create({
  wrapperMain: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
    transform: rotate180,
  },
  containerMain: {
    maxWidth: '70%',
    alignItems: 'flex-end',
    paddingTop: 5,
    paddingBottom: 5,
  },
  wrapperMessageMain: {
    backgroundColor: colors.messageMain,
    alignItems: 'flex-end',
    margin: 5,
    marginBottom: 0,
    padding: 5,
    paddingLeft: 20,
    borderRadius: 20,
    borderTopRightRadius: 0,
  },
  textMain: {
    fontSize: fontSizes.small,
  },
  timeMain: {
    padding: 5,
  },
  statusMessageMain: {
    paddingRight: 20,
    textAlign: 'right',
    fontSize: fontSizes.mini,
  },
});

export default styles;
