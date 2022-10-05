import React from 'react';
import {View, Text, Pressable} from 'react-native';

interface Props {
  onPress(): void;
  buttonTitle: string;
}

const IButton: React.FC<Props> = props => {
  return (
    <View>
      <Pressable onPressIn={props.onPress}>
        <Text>{props.buttonTitle}</Text>
      </Pressable>
    </View>
  );
};

export default IButton;
