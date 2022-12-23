import React from 'react';
import {ViewProps} from 'react-native';
import CMP from '../../components';
import IMG from '../../image';
import style from './style';

interface Props extends ViewProps {
  testID: string;
}

const ILabelTicket: React.FC<Props> = props => {
  const {testID} = props;

  return (
    <CMP.IView testID={testID} style={[style.container]}>
      <CMP.IText>{'Fenerbahçe'}</CMP.IText>
      <CMP.IImage
        source={{
          uri: IMG.Cancel,
        }}
        style={{width: 40, height: 40}}
        testID={'testImg'}
      />
    </CMP.IView>
  );
};

export default ILabelTicket;
