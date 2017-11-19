import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import fontSizes from '../../styles/fontSizes';

const styles = StyleSheet.create({
  containerRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: fontSizes.title,
    textAlign: 'center',
    margin: 10,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    height: 80,
  },
  input: {
    borderColor: colors.black,
    padding: 3,
    marginBottom: 5,
    fontSize: fontSizes.big,
  },
});

export default styles;
