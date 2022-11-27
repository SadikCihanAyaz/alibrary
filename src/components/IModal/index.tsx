import React from 'react';
import {StyleProp, Modal, ModalProps, ViewStyle} from 'react-native';

interface Props extends ModalProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
  testID?: string | undefined;
}

const IModal = (props: Props): JSX.Element => {
  const {children, testID, style} = props;
  return (
    <Modal testID={testID} style={[style]} {...props}>
      {children}
    </Modal>
  );
};

export default IModal;
