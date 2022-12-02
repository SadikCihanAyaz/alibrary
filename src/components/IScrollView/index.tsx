import React from 'react';
import {ScrollView, ScrollViewProps, StyleProp, ViewStyle} from 'react-native';

interface Props extends ScrollViewProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
}
const IScrollView = (props: Props): JSX.Element => {
  const {children, style} = props;
  return (
    <ScrollView style={style} {...props}>
      {children}
    </ScrollView>
  );
};

export default IScrollView;
