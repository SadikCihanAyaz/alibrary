import React from 'react';
import {View, Text, Pressable} from 'react-native';
import style from './style';
import * as Common from '../../utils/Style';

interface Props {
  onPress(): void;
  buttonTitle: string;
  testID: string;
}

const IButton: React.FC<Props> = props => {
  const {onPress, buttonTitle, testID} = props;

  return (
    <View>
      <Pressable
        testID={testID}
        style={[style.buttonStyle, Common.contentCenter()]}
        onPressIn={onPress}>
        <Text>{buttonTitle}</Text>
      </Pressable>
    </View>
  );
};

export default IButton;
