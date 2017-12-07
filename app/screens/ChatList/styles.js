import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
  },
  textInput: {
    backgroundColor: colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: 8,
    marginHorizontal: '2%',
    marginBottom: 8,
    marginTop: 4,
  },
});

export default styles;
