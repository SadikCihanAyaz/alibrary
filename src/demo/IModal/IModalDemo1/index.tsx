import React from 'react';
import {ModalProps, Pressable, StyleSheet} from 'react-native';
import CMP from '../../../components';

interface Props extends ModalProps {}

const IModalDemo1 = (): JSX.Element => {
  return (
    <CMP.IView>
      <CMP.IText style={styles2.modalText}>Hello World!</CMP.IText>
      <CMP.IText style={styles2.modalText}>Hello World!</CMP.IText>
      <CMP.IText style={styles2.modalText}>Hello World!</CMP.IText>
      <CMP.IText style={styles2.modalText}>Hello World!</CMP.IText>
      <CMP.IText style={styles2.modalText}>Hello World!</CMP.IText>
      <CMP.IText style={styles2.modalText}>Hello World!</CMP.IText>
      <CMP.IText style={styles2.modalText}>Hello World!</CMP.IText>
      <CMP.IText style={styles2.modalText}>Hello World!</CMP.IText>
      <Pressable
        style={[styles2.button, styles2.buttonClose]}
        onPress={() => null}>
        <CMP.IText style={styles2.textStyle}>Hide Modal</CMP.IText>
      </Pressable>
    </CMP.IView>
  );
};

export default IModalDemo1;

const styles2 = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
