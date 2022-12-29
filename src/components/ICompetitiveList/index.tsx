import React, {useMemo} from 'react';
import {GestureResponderEvent} from 'react-native';
import CMP from '../../components';
import {ICompetitive} from '../../types/ICompetitive';
//import styleLocal from '../ICompetitiveList/style';

interface Props {
  testID: string;
  data: ICompetitive[];
  listKey: string;
  onPressBtn: (event: any) => void;
}

const ICompetitiveList: React.FC<Props> = props => {
  const {testID, onPressBtn, data, listKey} = props;

  const getSortedState = (dataCompetitive: ICompetitive[]) =>
    dataCompetitive.sort((a: ICompetitive, b: ICompetitive) => a.id - b.id);

  const sortedDatas = useMemo(() => {
    if (data) {
      return getSortedState(data);
    }

    return data;
  }, [data]);

  const onPress = (item: GestureResponderEvent) => {
    onPressBtn(item);
  };

  return (
    <CMP.IFlatList
      testID={testID}
      data={sortedDatas}
      listKey={listKey}
      keyExtractor={i => i.id}
      renderItem={({item, index}) => {
        return (
          <CMP.IPressable
            key={'listKey' + index}
            testID={testID + '_pressable_' + index}
            onPressIn={onPress.bind(this, item)}>
            <CMP.ICompetitive
              testID={testID + '_competitive_' + index}
              {...item}
            />
          </CMP.IPressable>
        );
      }}
    />
  );
};

export default ICompetitiveList;
