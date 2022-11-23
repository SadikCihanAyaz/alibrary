import {StyleSheet} from 'react-native';
import {device} from 'utils/Template';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: device.DEVICE_WIDTH,
    height: device.DEVICE_HEIGHT,
    position: 'absolute',
    zIndex: 2,
  },
});
