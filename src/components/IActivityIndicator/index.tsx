import React from 'react';
import {
  StyleProp,
  ActivityIndicator,
  ViewStyle,
  ActivityIndicatorProps,
} from 'react-native';

interface Props extends ActivityIndicatorProps {
  styleActivityIndicator?: StyleProp<ViewStyle> | undefined;
}

const IActivityIndicator = (props: Props): JSX.Element => {
  const {styleActivityIndicator} = props;

  return <ActivityIndicator style={[styleActivityIndicator]} {...props} />;
};

export default IActivityIndicator;
