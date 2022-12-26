import React from 'react';
import {FlatList, FlatListProps} from 'react-native';

interface Props extends FlatListProps<any> {
  testID: string;
}

const IFlatList: React.FC<Props> = props => {
  const {testID} = props;

  return <FlatList {...props} testID={testID + 'flatList'} />;
};

export default IFlatList;
