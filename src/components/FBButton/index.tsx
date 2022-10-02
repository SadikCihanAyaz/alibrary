import React from 'react';
import {View, Text} from 'react-native';

interface FBButtonProp {
  label: string;
}

const x = 'test';

const FBButton: React.FC<FBButtonProp> = props => {
  const {label} = props;


  return (
    <View style={{marginTop: 100}}>
      <Text>{label}</Text>
    </View>
  );
};

export default FBButton;
