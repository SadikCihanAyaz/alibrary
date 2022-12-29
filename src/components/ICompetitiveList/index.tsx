import React from 'react';
import CMP from '../../components';

type HomeTeam = {
  name: string;
  logo: string;
};
type GuestTeam = {
  name: string;
  logo: string;
};

type Competitive = {
  testID: string;
  homeTeam: HomeTeam;
  guestTeam: GuestTeam;
  date: string;
  hours: string;
  place: string;
  backgroundImage: string;
};

interface Props {
  testID: string;
  data: Competitive[];
  listKey: string;
}

const ICompetitiveList: React.FC<Props> = props => {
  const {testID, data, listKey} = props;

  return (
    <CMP.IFlatList
      testID={testID}
      data={data}
      listKey={listKey}
      keyExtractor={i => i.team}
      renderItem={({item, index}) => {
        return (
          <CMP.IPressable
            testID={testID + '_pressable_' + index}
            onPressIn={() => null}>
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
