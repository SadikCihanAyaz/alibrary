import React from 'react';
import {StyleProp, ActivityIndicator, ViewStyle, ViewProps} from 'react-native';

interface Props extends ViewProps {
  children?: any;
  style?: StyleProp<ViewStyle> | undefined;
}

const IActivityIndicator = (props: Props): JSX.Element => {
  return <ActivityIndicator {...props} />;
};

export default IActivityIndicator;
