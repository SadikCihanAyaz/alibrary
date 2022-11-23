import React from 'react';
import {StyleProp, ActivityIndicatorProps, ViewStyle} from 'react-native';
import IActivityIndicator from '../IActivityIndicator';
import styleLocal from './style';

interface Props extends ActivityIndicatorProps {
  styleLoading?: StyleProp<ViewStyle> | undefined;
}

const ILoading = (props: Props): JSX.Element => {
  const {styleLoading} = props;
  return (
    <IActivityIndicator
      color="#000000"
      size="large"
      animating={true}
      styleActivityIndicator={[styleLocal.container, styleLoading]}
      {...props}
    />
  );
};

export default ILoading;
