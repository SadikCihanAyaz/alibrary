import React from 'react';
import {FlatList, ViewProps, FlatListProps} from 'react-native';

interface Props extends FlatListProps<ViewProps> {
  testID: string;
  data: any[];
}

const IFlatList: React.FC<Props> = props => {
  const {testID, data} = props;

  return <FlatList {...props} testID={testID + 'flatList'} data={data} />;
};

export default IFlatList;
