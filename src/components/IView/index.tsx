import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
  testID?: string | undefined;
}

const IView: React.FC<Props> = props => {
  const {children, testID, style} = props;
  return (
    <View testID={testID} style={style} {...props}>
      {children}
    </View>
  );
};

export default IView;
