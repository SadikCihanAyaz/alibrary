import React from 'react';
import {Image, ImageProps} from 'react-native';

interface Props extends ImageProps {
  testID: string;
}

const IImage: React.FC<Props> = props => {
  const {testID} = props;

  return <Image {...props} testID={testID} />;
};

export default IImage;
