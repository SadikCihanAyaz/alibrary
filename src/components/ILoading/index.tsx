import React from 'react';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import IActivityIndicator from '../IActivityIndicator';

interface Props extends ViewProps {
  children?: any;
  style?: StyleProp<ViewStyle> | undefined;
}

const ILoading = (props: Props): JSX.Element => {
  return <IActivityIndicator {...props} />;
};

export default ILoading;
