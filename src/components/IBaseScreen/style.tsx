import {StyleSheet} from 'react-native';
import {common} from 'utils/Template';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerGrayColor: {
    backgroundColor: common.COLOR_4,
    opacity: 0.8,
  },
  containerDefaultColor: {
    backgroundColor: common.SCREEN_BACKGROUND_COLOR,
  },
});
