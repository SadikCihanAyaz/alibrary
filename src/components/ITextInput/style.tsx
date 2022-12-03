import {common} from 'utils/Template';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerText: {
    fontSize: common.FONT_SIZE,
    paddingLeft: common.COMPONENT_PADDING_LEFT,
    fontWeight: common.FONT_WEIGHT_BOLD,
  },
  headerTextError: {
    fontSize: common.FONT_SIZE,
    paddingLeft: common.COMPONENT_PADDING_LEFT,
    fontWeight: common.FONT_WEIGHT_BOLD,
    color: common.ERROR_COLOR,
  },
  textInput: {
    height: common.COMPONENT_LINE_HEIGHT,
    fontSize: common.FONT_SIZE,
    borderRadius: common.COMPONENT_BORDER_RADIUS,
    borderBottomWidth: common.COMPONENT_BORDER_WITH,
    borderColor: common.THEMES_COLOR,
    paddingLeft: common.COMPONENT_PADDING_LEFT,
    marginBottom: common.COMPONENT_MARGIN_BOTTOM,
  },
  textInputError: {
    height: common.COMPONENT_LINE_HEIGHT,
    fontSize: common.FONT_SIZE,
    borderRadius: common.COMPONENT_BORDER_RADIUS,
    borderBottomWidth: common.COMPONENT_BORDER_WITH_2,
    borderColor: common.ERROR_COLOR,
    paddingLeft: common.COMPONENT_PADDING_LEFT,
    marginBottom: common.COMPONENT_MARGIN_BOTTOM,
  },
  textInputFocus: {
    height: common.COMPONENT_LINE_HEIGHT_2,
    fontSize: common.FONT_SIZE,
    borderRadius: common.COMPONENT_BORDER_RADIUS,
    borderBottomWidth: common.COMPONENT_BORDER_WITH_2,
    borderColor: common.THEMES_COLOR,
    paddingLeft: common.COMPONENT_PADDING_LEFT,
    marginBottom: common.COMPONENT_MARGIN_BOTTOM,
  },
  textInputPadding: {
    paddingTop: common.TEXT_INPUT_IMAGE_PADDING,
  },
  imageTextInputViewStyle: {
    justifyContent: 'center',
    flex: 1,
  },
  textInputImage: {
    paddingStart: common.COMPONENT_LINE_HEIGHT,
  },
  iconStyle: {
    position: 'absolute',
    left: common.COMPONENT_PADDING_LEFT,
    marginBottom: common.COMPONENT_PADDING_LEFT,
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  iconSize: {
    width: (common.COMPONENT_LINE_HEIGHT * 3) / 5,
    height: (common.COMPONENT_LINE_HEIGHT * 3) / 5,
  },
});
