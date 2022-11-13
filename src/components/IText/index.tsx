import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

interface Props {
  children?: any;
  style?: StyleProp<TextStyle> | undefined;
}

const IText: React.FC<Props> = props => {
  const {children} = props;
  return <Text {...props}>{children}</Text>;
};

export default IText;
