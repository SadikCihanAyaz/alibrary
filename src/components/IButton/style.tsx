import {common} from '../../utils/Template';

export default {
  buttonStyle: {
    backgroundColor: common.THEMES_COLOR,
    borderRadius: common.COMPONENT_BORDER_RADIUS,
    height: common.COMPONENT_LINE_HEIGHT,
  },
  buttonPressedStyle: {
    backgroundColor: common.BUTTON_PRESSED_COLOR,
    borderRadius: common.COMPONENT_BORDER_RADIUS,
    //height: common.COMPONENT_LINE_HEIGHT,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  buttonTextStyle: {
    color: common.COLOR_2,
  },
};
