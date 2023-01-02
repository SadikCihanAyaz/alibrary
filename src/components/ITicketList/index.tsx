import React from 'react';
import CMP from '../../components';
import {TicketType} from '../../types/';

interface Props {
  testID: string;
  data: TicketType[];
  onPress: (ticket: TicketType) => void;
}

const ITicketList: React.FC<Props> = props => {
  const {testID, data, onPress} = props;

  return (
    <CMP.IFlatList
      testID={testID}
      data={data}
      listKey={testID}
      keyExtractor={i => i.id}
      renderItem={({item, index}) => {
        return (
          <CMP.ITicket
            testID={testID + 'ticket' + index}
            onPress={onPress}
            ticket={item}
          />
        );
      }}
    />
  );
};

export default ITicketList;
