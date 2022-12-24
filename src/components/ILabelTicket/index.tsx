import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';
import CMP from '../../components';

import style from './style';

interface Props extends ViewProps {
  testID: string;
  text: string;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  leftRound?: boolean;
  rightRound?: boolean;
  imgUri?: string;
  styleView?: StyleProp<ViewStyle> | undefined;
  styleText?: StyleProp<TextStyle> | undefined;
  stylePresseable?: StyleProp<ViewStyle> | undefined;
}

const ILabelTicket: React.FC<Props> = props => {
  const {
    testID,
    text,
    onPress,
    leftRound = false,
    rightRound = false,
    imgUri,
    styleView,
    styleText,
    stylePresseable,
  } = props;

  return (
    <CMP.IView
      testID={testID}
      style={[
        style.container,
        leftRound && style.leftRound,
        rightRound && style.rightRound,
        styleView,
      ]}>
      <CMP.IText testID={testID + '_text'} style={[style.text, styleText]}>
        {text}
      </CMP.IText>
      {imgUri ? (
        <CMP.IPressable
          onPressIn={onPress}
          testID={testID + '_pressable'}
          style={[style.pressable, stylePresseable]}>
          <CMP.IImage
            source={{
              uri: imgUri,
            }}
            style={style.image}
            testID={'testImg'}
          />
        </CMP.IPressable>
      ) : null}
    </CMP.IView>
  );
};

export default ILabelTicket;
