import React, {useState} from 'react';
import CMP from '../index';
import {Dimensions, ViewStyle} from 'react-native';
import styleLocal from './style';

interface Props {
  testID: string;
  listKey: string;
  numColumns: number;
  data: any;
  onPress: (item: any) => void;
}

const ITeams: React.FC<Props> = props => {
  const {testID, data, numColumns, listKey, onPress} = props;
  const [selectedItem, setSelectedItem] = useState();

  const devicewidth = Dimensions.get('window').width;

  const selectedTeam = (valueItem: any) => {
    setSelectedItem(valueItem.team);
    onPress(valueItem);
  };

  return (
    <CMP.IFlatList
      testID={testID + '_iTeams'}
      numColumns={numColumns}
      data={data}
      listKey={listKey}
      keyExtractor={i => i.team}
      renderItem={({item, index}) => {
        return (
          <CMP.IPressable
            key={listKey + index}
            testID={'pressable' + index}
            style={
              [
                styleLocal.presseable,
                {
                  width: devicewidth / numColumns,
                  height: devicewidth / numColumns,
                },
                selectedItem === item.team ? styleLocal.selectedItem : null,
              ] as ViewStyle
            }
            onPressIn={selectedTeam.bind(undefined, item)}>
            <CMP.IIconText
              testID={'iconTest'}
              source={item.uri}
              styleView={styleLocal.iconText as ViewStyle}
              styleImage={{
                width: devicewidth / (numColumns * 2),
                height: devicewidth / (numColumns * 2),
              }}
              text={item.team}
            />
          </CMP.IPressable>
        );
      }}
    />
  );
};

export default ITeams;
