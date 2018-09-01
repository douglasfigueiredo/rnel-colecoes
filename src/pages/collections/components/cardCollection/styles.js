import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    maxHeight: 300,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: metrics.basePadding,
  },
  title: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: metrics.basePadding,
  },

});

export default styles;
