import {common} from '../../utils/Template';

export default {
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
    borderColor: common.COLOR_3,
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
};
