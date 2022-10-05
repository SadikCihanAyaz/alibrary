import React from 'react';
import {View, Text, Pressable} from 'react-native';
import style from './style';
import * as Common from '../../utils/Style';

interface Props {
  onPress(): void;
  buttonTitle: string;
}

const IButton: React.FC<Props> = props => {
  const {onPress, buttonTitle} = props;

  return (
    <View>
      <Pressable
        style={[style.buttonStyle, Common.contentCenter()]}
        onPressIn={onPress}>
        <Text>{buttonTitle}</Text>
      </Pressable>
    </View>
  );
};

export default IButton;
