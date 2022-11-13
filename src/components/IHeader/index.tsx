import React from 'react';
import {View} from 'react-native';

interface Props {
  children: any;
}

const IHeader: React.FC<Props> = props => {
  const {children} = props;
  return <View>{children}</View>;
};

export default IHeader;
