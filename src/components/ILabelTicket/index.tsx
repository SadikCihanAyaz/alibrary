import React from 'react';
import {GestureResponderEvent, ViewProps} from 'react-native';
import CMP from '../../components';

import style from './style';

interface Props extends ViewProps {
  testID: string;
  text: string;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  leftRound?: boolean;
  rightRound?: boolean;
  imgUri?: string;
}

const ILabelTicket: React.FC<Props> = props => {
  const {
    testID,
    text,
    onPress,
    leftRound = false,
    rightRound = false,
    imgUri,
  } = props;

  return (
    <CMP.IView
      testID={testID}
      style={[
        style.container,
        leftRound && style.leftRound,
        rightRound && style.rightRound,
      ]}>
      <CMP.IText style={style.text}>{text}</CMP.IText>
      {imgUri ? (
        <CMP.IPressable
          onPressIn={onPress}
          testID={testID + '_pressable'}
          style={style.pressable}>
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
