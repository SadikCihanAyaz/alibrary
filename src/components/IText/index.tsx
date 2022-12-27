import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

interface Props extends TextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle> | undefined;
}

const IText = (props: Props): JSX.Element => {
  const {children, style} = props;
  return (
    <Text {...props} style={[{fontFamily: 'Cochin'}, style]}>
      {children}
    </Text>
  );
};

export default IText;
