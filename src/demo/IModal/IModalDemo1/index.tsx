import React from 'react';
import {ModalProps, Pressable, StyleSheet} from 'react-native';
import CMP from '../../../components';

interface Props extends ModalProps {}

const IModalDemo1 = (): JSX.Element => {
  return (
    <CMP.IModal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        //Alert.alert('Modal has been closed.');
        //setModalVisible(true);
      }}>
      <CMP.IView style={styles2.centeredView}>
        <CMP.IView style={styles2.modalView}>
          <CMP.IText style={styles2.modalText}>Hello World!</CMP.IText>
          <Pressable
            style={[styles2.button, styles2.buttonClose]}
            onPress={() => null}>
            <CMP.IText style={styles2.textStyle}>Hide Modal</CMP.IText>
          </Pressable>
        </CMP.IView>
      </CMP.IView>
    </CMP.IModal>
  );
};

export default IModalDemo1;

const styles2 = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
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
