import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import styleLocal from './style';
import CMP from '../../components';

interface Props {
  children?: any;
  styleBaseScreen?: StyleProp<ViewStyle> | undefined;
  styleLoading?: StyleProp<ViewStyle> | undefined;
  loading?: boolean;
  modal?: React.ReactNode;
}

const IBaseScreen: React.FC<Props> = props => {
  const {children, styleBaseScreen, styleLoading, loading, modal} = props;

  return (
    <CMP.IView
      style={[
        styleLocal.container,
        styleLocal.containerDefaultColor,
        modal ? styleLocal.containerModalOpacity : null,
        styleBaseScreen,
      ]}>
      {loading && !modal ? (
        <CMP.ILoading styleLoading={[styleLoading]} />
      ) : null}
      {modal ? (
        <CMP.IModal
          animationType="slide"
          transparent={true}
          visible={true}
          style={[styleLocal.modalView]}
          onRequestClose={() => {
            //Alert.alert('Modal has been closed.');
            //setModalVisible(true);
          }}>
          {loading ? (
            <CMP.ILoading styleLoading={[styleLocal.modalLoading]} />
          ) : null}
          {modal}
        </CMP.IModal>
      ) : null}

      <CMP.ISafeAreaView>
        <CMP.IScrollView keyboardShouldPersistTaps="handled">
          <CMP.IKeyboardAvoidingView enabled>
            {children}
          </CMP.IKeyboardAvoidingView>
        </CMP.IScrollView>
      </CMP.ISafeAreaView>
    </CMP.IView>
  );
};

export default IBaseScreen;
