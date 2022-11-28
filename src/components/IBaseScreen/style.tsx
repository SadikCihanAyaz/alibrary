import {StyleSheet} from 'react-native';
import {common} from 'utils/Template';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerGrayColor: {
    backgroundColor: common.COLOR_4,
  },
  loadingOpacity: {
    opacity: common.LOADING_OPACITY,
  },
  loadingOpacityModal: {
    opacity: common.LOADING_OPACITY_MODAL,
  },
  containerDefaultColor: {
    backgroundColor: common.SCREEN_BACKGROUND_COLOR,
  },
});
