import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import styleLocal from './style';
import * as Common from '../../utils/Style';
import CMP from '../../components';

interface Props {
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  buttonTitle: string;
  testID: string;
  buttonStyle?: StyleProp<ViewStyle> | undefined;
  buttonTextStyle?: StyleProp<TextStyle> | undefined;
}

const IButton: React.FC<Props> = props => {
  const {onPress, buttonTitle, testID, buttonStyle, buttonTextStyle} = props;
  const [onPressed, setOnPressed] = useState(false);

  const onPressedInFunc = () => {
    setOnPressed(true);
  };

  const onPressedOutFunc = () => {
    setOnPressed(false);
  };

  return (
    <Pressable
      testID={testID}
      style={[
        styleLocal.buttonStyle,
        Common.contentCenter(),
        onPressed ? styleLocal.buttonPressedStyle : null,
        buttonStyle,
      ]}
      onPress={onPressedInFunc}
      onPressOut={onPressedOutFunc}
      onPressIn={onPress}>
      <CMP.IText style={[styleLocal.buttonTextStyle, buttonTextStyle]}>
        {buttonTitle}
      </CMP.IText>
    </Pressable>
  );
};

export default IButton;
