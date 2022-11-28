import React from 'react';
import {StyleProp, Modal, ModalProps, ViewStyle} from 'react-native';
import CMP from '../../components';
import styleLocal from './style';

interface Props extends ModalProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
  testID?: string | undefined;
}

const IModal = (props: Props): JSX.Element => {
  const {children, testID, style} = props;
  return (
    <Modal testID={testID} style={[style]} {...props}>
      <CMP.IView
        testID={testID + '_view'}
        style={[styleLocal.modalView, style]}>
        {children}
      </CMP.IView>
    </Modal>
  );
};

export default IModal;
