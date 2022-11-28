import {StyleSheet} from 'react-native';
import {common, device} from 'utils/Template';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerGrayColor: {
    backgroundColor: common.COLOR_4,
  },
  containerModalOpacity: {
    opacity: 0.4,
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
  modalLoading: {
    height:
      device.DEVICE_HEIGHT - device.DEVICE_HEIGHT / common.MODAL_CROSS_VALUE,
  },
  modalView: {
    backgroundColor: common.SCREEN_BACKGROUND_COLOR,
    borderRadius: common.MODAL_RADIUS,
    width: device.DEVICE_WIDTH,
    marginTop: device.DEVICE_HEIGHT / common.MODAL_CROSS_VALUE,
    height:
      device.DEVICE_HEIGHT - device.DEVICE_HEIGHT / common.MODAL_CROSS_VALUE,
    padding: 35,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});
