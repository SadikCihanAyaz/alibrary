import React from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface Props extends KeyboardAvoidingViewProps {
  children?: any;
  style?: StyleProp<ViewStyle> | undefined;
}

const IKeyboardAvoidingView = (props: Props): JSX.Element => {
  const {children} = props;
  return <KeyboardAvoidingView {...props}>{children}</KeyboardAvoidingView>;
};

export default IKeyboardAvoidingView;
