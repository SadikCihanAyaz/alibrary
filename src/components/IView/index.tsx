import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

interface Props {
  children?: any;
  style?: StyleProp<ViewStyle> | undefined;
}

const IView: React.FC<Props> = props => {
  const {children} = props;
  return <View {...props}>{children}</View>;
};

export default IView;
