import React from 'react';
import CMP from '../../components';
import {TicketType} from '../../types/';

interface Props {
  testID: string;
  data: TicketType[];
}

const ITicketList: React.FC<Props> = props => {
  const {testID, data} = props;

  return (
    <CMP.IFlatList
      testID={testID}
      data={data}
      listKey={testID}
      keyExtractor={i => i.id}
      renderItem={({item, index}) => {
        return <CMP.ITicket testID={testID + 'ticket' + index} ticket={item} />;
      }}
    />
  );
};

export default ITicketList;
