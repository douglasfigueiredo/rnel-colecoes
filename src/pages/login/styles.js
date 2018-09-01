import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: metrics.basePadding * 2,
  },
  logo: {
    alignItems: 'center',
    marginBottom: metrics.baseMargin * 4,
  },
  imageLogo: {
    width: 162,
    height: 54,
  },
  input: {
    fontSize: 14,

    paddingRight: metrics.basePadding,
    paddingLeft: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.baseMargin * 2,
    backgroundColor: colors.light,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.success,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
});

export default styles;
