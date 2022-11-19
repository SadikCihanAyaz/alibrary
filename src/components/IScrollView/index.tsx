import React from 'react';
import {ScrollView, ScrollViewProps, StyleProp, ViewStyle} from 'react-native';

interface Props extends ScrollViewProps {
  children?: any;
  style?: StyleProp<ViewStyle> | undefined;
}
const IScrollView = (props: Props): JSX.Element => {
  const {children} = props;
  return <ScrollView {...props}>{children}</ScrollView>;
};

export default IScrollView;
