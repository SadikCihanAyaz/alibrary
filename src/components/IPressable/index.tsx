import React from 'react';
import {Pressable, PressableProps} from 'react-native';

interface Props extends PressableProps {
  testID: string;
  children: React.ReactNode;
}

const IPressable: React.FC<Props> = props => {
  const {testID, children} = props;

  return (
    <Pressable {...props} testID={testID}>
      {children}
    </Pressable>
  );
};

export default IPressable;
