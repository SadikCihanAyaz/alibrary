import React from 'react';
import {SafeAreaView, StyleProp, ViewStyle} from 'react-native';

interface Props {
  children?: React.ReactNode;
  styleSafeAreaView?: StyleProp<ViewStyle> | undefined;
}

const ISafeAreaView: React.FC<Props> = props => {
  const {children, styleSafeAreaView} = props;
  return (
    <SafeAreaView style={styleSafeAreaView} {...props}>
      {children}
    </SafeAreaView>
  );
};

export default ISafeAreaView;
