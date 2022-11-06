import {Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const devicewidth = Dimensions.get('window').width;

export const common = {
  THEMES_COLOR: selectedThemes(),
  THEMES_COLOR_2: '#EAEDED',
  ERROR_COLOR: '#F60108',
  SUCCESS_COLOR: '#0CA200',
  MODAL_WARN: '#FA7B29',
  MODAL_INFO: selectedThemes(),
  MODAL_ERROR: '#F60108',
  MODAL_SUCCESS: selectedThemes(),
  MODAL_DEFAULT: selectedThemes(),
  FONT_SIZE: 14,
  FONT_SIZE_2: 20,
  FONT_SIZE_3: 8,
  FONT_SIZE_4: 12,
  FONT_SIZE_5: 16,
  FONT_WEIGHT_BOLD: 'bold',
  COLOR_1: 'black',
  COLOR_2: '#ffffff',
  COLOR_3: '#eaeaea',
  COLOR_4: '#A7A7A7',
  COLOR_5: '#FBFAFA',
  SCREEN_BACKGROUND_COLOR: '#eaeaea',
  DASHBOARD_R: '255',
  DASHBOARD_G: '255',
  DASHBOARD_B: '255',
  DASHBOARD_O: 1,
  MODAL_PADDING: 15,
  COMPONENT_PADDING: 15,
  COMPONENT_MARGIN: 15,
  COMPONENT_MARGIN_TOP: 15,
  COMPONENT_MARGIN_LEFT: 15,
  COMPONENT_MARGIN_RIGHT: 15,
  COMPONENT_PADDING_LEFT: 10,
  COMPONENT_PADDING_LEFT_15: 15,
  COMPONENT_PADDING_RIGHT: 10,
  COMPONENT_PADDING_RIGHT_15: 15,
  COMPONENT_MARGIN_BOTTOM: 5,
  COMPONENT_MARGIN_BOTTOM_15: 15,
  COMPONENT_LINE_HEIGHT: 45,
  COMPONENT_LINE_HEIGHT_2: 55,
  COMPONENT_LINE_HEIGHT_3: 35,
  COMPONENT_BORDER_RADIUS: 5,
  COMPONENT_BORDER_WITH: 1,
  COMPONENT_BORDER_WITH_2: 2,
  LAST_TRANSACTION_ITEM_ALIGINS_LEFT_SIDE: '20%',
  LAST_TRANSACTION_ITEM_ALIGINS_CENTER_SIDE: '40%',
  LAST_TRANSACTION_ITEM_ALIGINS_RIGHT_SIDE: '40%',
  TERMINAL_ITEM_ALIGINS_LEFT_SIDE: '0%',
  TERMINAL_ITEM_ALIGINS_CENTER_SIDE: '50%',
  TERMINAL_ITEM_ALIGINS_RIGHT_SIDE: '50%',
  MENU_ITEM_MARGIN: 5,
  MENU_ITEM_PADDING: 5,
  MENU_ITEM_SHADOW_OPACITY: 0.2,
  MENU_ITEM_SHADOW_RADIUS: 1.41,
  MENU_ITEM_LEFT_WIDTH: '15%',
  MENU_ITEM_RIGHT_WIDTH: '10%',
  MENU_ITEM_CENTER_WIDTH: '75%',
  MENU_ITEM_SHADOW: 5,
  MENU_ITEM_LEFT_LOGO_SIZE: '50%',
  MENU_ITEM_RIGHT_ARROW_SIZE: '50%',
  SEPERATOR_WIDTH: '100%',
  IMAGE_WIDTH: devicewidth / 20,
  DEVICE_HEIGHT: deviceHeight,
  DEVICE_WIDTH: devicewidth,
  CUSTOMER_INDIVIDUAL_ACCOUNT_RADIUS: 15,
};

function selectedThemes() {
  return '#7BB3FE';
}