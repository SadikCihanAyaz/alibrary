import React from 'react';
import {ImageBackground, ImageProps} from 'react-native';

interface Props extends ImageProps {
  testID: string;
  children: React.ReactNode;
}

const IImageBackground: React.FC<Props> = props => {
  const {testID, children} = props;

  return (
    <ImageBackground {...props} testID={testID}>
      {children}
    </ImageBackground>
  );
};

export default IImageBackground;
