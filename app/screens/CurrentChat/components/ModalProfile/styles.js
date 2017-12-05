import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';
// import { indent } from '../../../../styles/dimensions';
// import fontSizes from '../../../../styles/fontSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 48, 0.5)',
  },
  contentContainer: {
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
});

export default styles;


// backgroundColor: colors.backgroundColor,
