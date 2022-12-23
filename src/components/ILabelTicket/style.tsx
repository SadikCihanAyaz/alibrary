import {common} from '../../utils/Template';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'baseline',
    backgroundColor: common.THEMES_COLOR,
    alignItems: 'center',
    height: common.COMPONENT_LINE_HEIGHT,
  },
  rightRound: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    paddingRight: 20,
  },
  leftRound: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    paddingLeft: 20,
  },
  text: {
    marginLeft: 10,
    color: common.COLOR_2,
  },
  pressable: {
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 30,
    height: 30,
    tintColor: common.COLOR_2,
  },
});
