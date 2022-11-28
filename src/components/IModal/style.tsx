import {StyleSheet} from 'react-native';
import {common, device} from 'utils/Template';

/**
 * Adding those values that marginTop and height
 * must be equal value of device.DEVICE_HEIGHT
 */
export default StyleSheet.create({
  modalView: {
    backgroundColor: common.COLOR_2,
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
